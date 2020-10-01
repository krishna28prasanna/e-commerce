import {combineReducers} from "redux"

import userReducer from "../Reducers/User/UserReducer"

const rootReducer = combineReducers({
    user : userReducer
})
export default rootReducer