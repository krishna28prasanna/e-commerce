import {combineReducers} from "redux"

import userReducer from "../Reducers/User/UserReducer"
import cartReducer from "./Cart/CartReducer"

const rootReducer = combineReducers({
    user : userReducer,
    cartData : cartReducer
})
export default rootReducer