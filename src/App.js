import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Header />
              <h1>Home</h1>
            </Route>
            <Route exact path="/checkout">
              <h1>CheckOut</h1>
            </Route>
            <Route exact path="/login">
              <h1>Login</h1>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
