import {combineReducers} from "redux"
import userReducer from "../Reducers/User/UserReducer"
import cartReducer from "./Cart/CartReducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import directoryReducer from "./Directory/DirectoryReducer"
import shopDataReducer from "./ShopData/ShopDataReducer"

const persistConfig = {
    key : "root",
    storage,
    whitelist : ["cartData"]
}
const rootReducer = combineReducers({
    user : userReducer,
    cartData : cartReducer,
    directory : directoryReducer,
    shopData : shopDataReducer
})
export default persistReducer(persistConfig,rootReducer)