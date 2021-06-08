import React, { useEffect } from "react";
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
import { Consumer } from "./components/StateProvider";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const [{ user }, dispatch] = Consumer();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user login 👍:
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logout 👎:
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //cleanup
      unsubscribe();
    };
  });
  console.log(user);
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
