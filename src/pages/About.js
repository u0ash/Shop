import React, { Component } from "react";
import Layout from "../components/Layout";

import "./About.css"

class About extends Component {
  render() {
    const { info } = this.props;
    return (
      <Layout>
        <div className="about-container">
          <div className="about-info">
            <h2 className="title">{info.Title}</h2>
            <p className="about-description">
              {info.Description}
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
