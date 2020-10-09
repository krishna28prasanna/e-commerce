import React, { useState } from "react";
import CustomButton from "../Custom-Button/CustomButton";
import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [userCredentials,setUserCredentials] = useState({displayName:"",email:"",password:""})
  const handleChange = (e) => {
    setUserCredentials({...userCredentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { displayName, email, password } = userCredentials;
    const signUpData = { displayName, email, password };

    console.log(signUpData);
  };
  const { displayName, email, password } = userCredentials
    return (
      <div>
        <h1>Sign Up</h1>
        <div className="container">
          <div className="row">
            <div className="offset-4 col-md-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="displayName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="displayName"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center">
                  <input type="submit" value="Submit" className="signup-btn" />
                  {/* <CustomButton>Submit</CustomButton> */}
                  
                </div>
                <p>Already have an account ? <Link to="/signin">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default SignUp;
