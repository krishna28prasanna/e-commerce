import React from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import './App.css';
import Header from './Component/Header/Header';
import Homepage from './Pages/Home-Page/Homepage';
import ShopPage from "./Pages/Shop-Page/ShopPage"

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Switch>
      <Route path="/" component={Homepage} exact={true} />
      <Route path="/shop" component={ShopPage}/>
    </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
