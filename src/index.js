import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import ConfigureStore from "./Component/Redux/Store/ConfigureStore";
import { PersistGate } from "redux-persist/integration/react";
const store = ConfigureStore();
const jsx = (
  <Provider store={store[0]}>
    <PersistGate persistor={store[1]}>
      <App />
    </PersistGate>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
