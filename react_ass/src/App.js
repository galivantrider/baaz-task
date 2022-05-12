import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{background:'black'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/sign-in"} style={{color:'white'}}>BotSpot.AI</Link>
          <div className=" navbar" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto d-flex">
              <li className="nav-item">
                <Link className="navbar-brand" to={"/sign-in"} style={{color:'white'}}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to={"/sign-up"} style={{color:'white'}}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper " style={{background:'black',alignItems:'center'}}>
        <div className="card" style={{width:'20rem',height:'33rem'}}>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
