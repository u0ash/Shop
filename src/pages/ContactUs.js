import React, { Component } from "react";
import Layout from "../components/Layout";

import "./ContactUs.css";

class ContactUs extends Component {
  render() {
    const { info } = this.props;
    return (
      <Layout>
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="title">{info.Title}</h2>
            <div className="contact-info-container">
              <span className="info-name">Phone :   </span>
              <span className="info-description">{info.Phone}</span>
            </div>

            <div className="contact-info-container">
              <span className="info-name">Address :   </span>
              <span className="info-description">{info.Address}</span>
            </div>

            <div className="contact-info-container">
              <span className="info-name">Email :   </span>
              <span className="info-description">{info.Email}</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ContactUs;
