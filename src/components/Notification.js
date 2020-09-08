import React, { Component } from "react";
import "./Notification.css";

class Notification extends Component {
  close() {
    let container = document.getElementsByClassName("notification-container");
    container[0].style.display = "none";
  }

  render() {
    return (
      <div className="notification-container">
        <div className="notification ">
          <span className="tick">
            <img src="images/check.svg" alt="" />
          </span>
          <p className="notification-message">
            Item added successfully to the cart
          </p>
          <span onClick={this.close} className="close">
            <img src="images/cancel.svg" alt="" />
          </span>
        </div>
      </div>
    );
  }
}

export default Notification;
