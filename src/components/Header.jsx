import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./Header.css";
const Header = () => {
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
          <Link to="/login" className="link">
            <div className="options">
              <span className="lineOne">Hello RAza</span>
              <span className="lineTwo">Sign In</span>
            </div>
          </Link>
          {/* 2nd Link */}
          <Link className="link">
            <div className="options">
              <span className="lineOne">Returns</span>
              <span className="lineTwo">& Orders</span>
            </div>
          </Link>
          {/* 3rd Link */}
          <Link className="link">
            <div className="options">
              <span className="lineOne">Your</span>
              <span className="lineTwo">Prime</span>
            </div>
          </Link>
          {/* 4th Link */}
          <Link to="/checkout" className="link">
            <div className="cart">
              <ShoppingCartOutlinedIcon className="icon" />
              <span className="lineTwo cartCount">0</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
