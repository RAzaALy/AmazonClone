import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    //login logic 😄
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in successfully and redirect to homepage:
        setUser(username);
        history.push("/");
      })
      .catch((error) =>{toast.error(`${error.message}`, {
        position: "top-right",
        zIndex: 43343434,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });});
  };
  const register = (e) => {
    e.preventDefault();
    // registr logic 🔥
    if(username.length > 2){

      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in and redirect to homepage:
        history.push("/");
        setUser(auth);
        return auth.user.updateProfile({
          displayName: username,
        });
        
      })
      .catch((error) =>{
        toast.error(`${error.message}`, {
          position: "top-right",
          zIndex: 43343434,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
      setUsername(username);
      setUser(username);
    }else{
      toast.info(`Username must contain 3 letters or more.`, {
        position: "top-right",
        zIndex: 43343434,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="login">
        <ToastContainer style={{ fontSize: "1.4rem" }} />
      <Link to="/">
        <img src="images/logo2.png" className="login__logo" alt="logo" />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>Username</h5>
          <input placeholder="username is optional for amazon users" type="text" onChange={(e) => setUsername(e.target.value)} />
          <h5>E-mail</h5>
          <input placeholder="email" type="text" onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input
          placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={login} className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          Amazon can send your account security verification code via text
          message. You'll generally receive the code within a few seconds. If
          you're adding a line to your account, the primary account holder will
          receive a text message.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
