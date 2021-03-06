import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./Component/Error-Boundary/ErrorBoundary";
import Header from "./Component/Header/Header";
import SpinnerIcon from "./Component/Spinner/Spinner";
const Homepage = lazy(() => import("./Pages/Home-Page/Homepage"));
const ShopPage = lazy(() => import("./Pages/Shop-Page/ShopPage"));
const CheckoutPage = lazy(() => import("./Pages/Checkout-page/CheckoutPage"));
const Login = lazy(() => import("./Pages/SignIn-Page/Login"));
const Register = lazy(() => import("./Pages/SignUp-Page/Register"));
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={SpinnerIcon}>
                <Route path="/" component={Homepage} exact={true} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/checkout" component={CheckoutPage} />
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
