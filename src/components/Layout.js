import React, { Component } from "react";
import Navigation from "./Navigation";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navigation />
        <div className="main">{children}</div>
      </div>
    );
  }
}

export default Layout;
