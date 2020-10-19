import React from "react"
import Error404 from "./Error404"

class ErrorBoundary extends React.Component{
    
    constructor(){
        super()
        this.state = {
            hasErrored : false
        }
    }
   
    static getDerivedStateFromError(error){
        return{
            hasErrored : true
        }
    }
    componentDidCatch(error,info){
        console.log(error)
    }
    render(){
        console.log("Error boundary")
        if(this.state.hasErrored){
            return <Error404 />
        }
        return this.props.children
    }
}
export default ErrorBoundary