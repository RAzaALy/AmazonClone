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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        console.log(user.displayName);
        toast.info(`You have sussessfully login.`, {
          position: "top-right",
          zIndex: 43343434,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        //user logout 👎:
        dispatch({
          type: "SET_USER",
          user: null,
        });
        <Redirect to="/login" />   
      }
    });
    return () => {
      //cleanup
      unsubscribe();
    };
  },[]);
  return (
    <>
      <Router>
        <div className="app">
      <ToastContainer style={{ fontSize: "1.4rem" }} />
          <Switch>
            <Route exact path="/">
              <Header name={user} />
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
