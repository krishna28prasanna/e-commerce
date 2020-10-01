import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import ConfigureStore from "./Component/Redux/Store/ConfigureStore";
const store = ConfigureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
