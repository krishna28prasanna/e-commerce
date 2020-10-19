import React from "react"
import "./Error404.css"
const Error404 = () =>{
    return(
        <div>
            <div className="error-div">
            <img src="https://i.imgur.com/3suxlvm.png" alt="" className="error-img" />
            </div>
            <h1 className="text-center" style={{'margin-top' : "-96px"}}>Sorry this Page is broken</h1>
        </div>
    )
}
export default Error404