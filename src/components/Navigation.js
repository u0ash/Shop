import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const cart = localStorage.getItem("cart");
    let cartItems = JSON.parse(cart);
    return (
      <div>
        <div className="navigation">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/About" className="navbar-item">
            About Us
          </Link>
          <Link to="/ContactUs" className="navbar-item">
            Contact Us
          </Link>
          <Link to="/Cart" className="navbar-item cart-icon">
            <img src="images/market.svg" alt="" />
            {/* <span>({cartItems.length})</span> */}
          </Link>
        </div>
        <hr />
      </div>
    );
  }
}

export default Navigation;
