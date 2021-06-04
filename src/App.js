import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Scroll from "./components/Scroll";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Scroll showBelow={400} />
        </div>
      </Router>
    </>
  );
}

export default App;
