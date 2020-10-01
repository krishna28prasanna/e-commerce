import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import rootReducer from "../Reducers/RootReducers"
const middlewares = [logger]
const ConfigureStore = () => {
    const store = createStore(rootReducer,applyMiddleware(...middlewares))
    return store
}
export default ConfigureStore