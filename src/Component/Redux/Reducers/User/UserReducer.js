const initialState = {
    currentUser : null
}

const userReducer = (state=initialState,action)=>{
    console.log("reducer",action.payload)
    switch(action.type){
        case "SET_CURRENT_USER" : 
        console.log("reducer",action.payload)
        return{
            ...state,
            currentUser : action.payload
        }
        default : return state
    }
}
export default userReducer