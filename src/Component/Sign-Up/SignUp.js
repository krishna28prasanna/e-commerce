import React from "react";
import CustomButton from "../Custom-Button/CustomButton";
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import "./SignUp.css";
import { Link } from "react-router-dom";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      error: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
          error : null
      })
    } catch (error) {
      // console.log(error)
      this.setState({
        error: error.message,
      });
    }
    const signUpData = { displayName, email, password };

    console.log(signUpData);
  };
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div className="container">
          <div className="row">
            <div className="offset-4 col-md-4">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="displayName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="displayName"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-center">
                  {/* <input type="submit" value="Submit" className="signup-btn" /> */}
                  <CustomButton>Submit</CustomButton>
                  <CustomButton onClick={signInWithGoogle} signIn={true} type="button">
                    Google
                  </CustomButton>
                </div>
                <p>{this.state.error ? this.state.error : ""}</p>
                <p>Already have an account ? <Link to="/signin">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
