import shopData from "../../../../Pages/Shop-Page/ShopData"
const initialState = {
    data : shopData
}

const shopDataReducer = (state=initialState,action)=>{
    switch(action.type){
        default: 
        return state
    }
}
export default shopDataReducer