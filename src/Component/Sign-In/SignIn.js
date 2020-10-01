import React from "react"
import { auth } from "../../firebase/firebase.utils"
import CustomButton from "../Custom-Button/CustomButton"
import "./../Sign-Up/SignUp.css"
class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email : "",
            password : "",
            error : ""
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = async (e) =>{
        e.preventDefault()
        const {email,password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
        } catch (error) {
            this.setState({
                error : error.message
            })
        }
    }
    render(){
        return(
            <div>
                <h1>SignIn</h1>
                <div className="container">
                    <div className="row">
                        <div className="offset-4 col-md-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange}  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange}  />
                                </div>
                                <div className="text-center">
                                    {/* <input type="submit" value="Submit" className="signup-btn" /> */}
                                    <CustomButton>Submit</CustomButton>
                                </div>
                                <p>{this.state.error ? this.state.error : ""}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignIn