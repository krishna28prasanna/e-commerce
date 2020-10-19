import React from "react";
import CustomButton from "../Custom-Button/CustomButton";
import "./SignUp.css";
import { Link } from "react-router-dom";
import {Formik,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
const SignUp = () => {
    return (
      <Formik initialValues={{email : ""}} 
       validationSchema = {Yup.object({
         email : Yup.string().email("Invalid Email Address").required("Required")
       })}
       onSubmit={(values)=>{
         console.log(values)
       }}
      >
        <div>
        <div className="container">
          <div className="row">
            <div className="offset-4 col-md-4">
            <h1 className="text-center">Sign Up</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Enter Email</label>
                  <Field className="form-control" id="email" name="email" placeholder="Enter Email" />
                </div>
                <ErrorMessage name="email" />
                <button type="submit">Submit</button>
                {/* <CustomButton type="submit">Sign Up</CustomButton> */}
                <p>Already have an account ? <Link to="/signin">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </Formik>
    );
  }
export default SignUp;
