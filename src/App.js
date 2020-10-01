import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Homepage from "./Pages/Home-Page/Homepage";
import ShopPage from "./Pages/Shop-Page/ShopPage";
import Login from "./Pages/SignIn-Page/Login";
import Register from "./Pages/SignUp-Page/Register";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    console.log("componentDidMount");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log("entered");
        const userRef = await createUserProfileDocument(userAuth);
        console.log("User ref");
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          },()=>{
            console.log(this.state)
          });
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
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
        <Header currentUser={this.state.currentUser} />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Homepage} exact={true} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signup" component={Register} />
            <Route path="/signin" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
