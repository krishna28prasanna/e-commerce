import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import { setCurrentUser } from "./Component/Redux/Actions/User/UserAction";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Homepage from "./Pages/Home-Page/Homepage";
import ShopPage from "./Pages/Shop-Page/ShopPage";
import Login from "./Pages/SignIn-Page/Login";
import Register from "./Pages/SignUp-Page/Register";
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    console.log("componentDidMount");
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log("entered");
        const userRef = await createUserProfileDocument(userAuth);
        console.log("User ref");
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    console.log("unmounted");
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Homepage} exact={true} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/signup"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <Register />
              }
            />
            <Route
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <Login />
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
