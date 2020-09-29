import React from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import './App.css';
import Hatspage from './Pages/Hatspage/Hatspage';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} exact={true} />
      <Route path="/hats" component={Hatspage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
