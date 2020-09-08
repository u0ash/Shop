import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="title">
          <h1>"Everywhere Is Japan For A Samurai" </h1>
        </div>
        <img src="images/banner.jpg" alt="" />
      </div>
    );
  }
}

export default Banner;
