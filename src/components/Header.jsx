import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import {Redirect } from "react-router-dom";
import { auth } from "../firebase";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Consumer } from "./StateProvider";
import "./Header.css";
const Header = () => {
  const [{ cart, user }] = Consumer();

  // console.log(cart);
  const login = () => {
    //signout
    if (user) {
      auth.signOut();
      <Redirect to="/checkout" />
    }
  };
  return (
    <>
      <nav className="header">
        {/* Logo on the Left */}
        <Link to="/">
          <img className="logo" src="logo.png" alt="logo" />
        </Link>
        {/* Search Bar */}
        <div className="searchBox">
          <input type="text" className="searchInput" />
          <SearchIcon className="searchIcon" />
        </div>
        {/* Links  */}
        <div className="menu">
          {/* 1st Link */}
          <Link to={"/login"} className="link ">
            <div onClick={login} className="options signIn">
              <span className="lineOne">Hello,<span className="lineOneSpan">  {user?.displayName}</span></span>
              <span className="lineTwo" >{user ? "Sign Out" : "Sign In"}</span>
            </div>
          </Link>
          {/* 2nd Link */}
          <Link to="/" className="link">
            <div className="options ">
              <span className="lineOne">Returns</span>
              <span className="lineTwo">& Orders</span>
            </div>
          </Link>
          {/* 3rd Link */}
          <Link to="/" className="link">
            <div className="options">
              <span className="lineOne">Your</span>
              <span className="lineTwo">Prime</span>
            </div>
          </Link>
          {/* 4th Link */}
          <Link to="/checkout" className="link">
            <div className="cart">
              <ShoppingCartOutlinedIcon className="icon" />
              <span className="lineTwo cartCount">{cart?.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
