import {combineReducers} from "redux"

import userReducer from "../Reducers/User/UserReducer"
import cartDropdownReducer from "./Cart/CartDropdownReducer"

const rootReducer = combineReducers({
    user : userReducer,
    cartDropdown : cartDropdownReducer
})
export default rootReducer