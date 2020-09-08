import React, { Component } from "react";
import data from "../data.json";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Notification from "../components/Notification";
import Layout from "../components/Layout";
import $ from "jquery";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  show() {
    let container = document.getElementsByClassName("notification-container");
    container[0].style.display = "block";
    $(".notification-container").fadeOut(2000, "linear");
  }

  render() {
    return (
      <Layout>
        <Banner />
        <div className="products-container">
          <div className="products-title"><div className="highlight"> Our Art</div></div>
          <div className="products">
            {data.products.map((product, index) => {
              return (
                <div className="product" key={index}>
                  <img src={product.image} alt="" />
                  <div className="info-holder">
                    <div>
                      <div className="product-title">{product.title} </div>
                      <span className="product-by">By <b>{product.by}</b></span>
                    </div>
                    <div className="product-price">{product.price} $</div>
                  </div>
                  <button
                    onClick={() => {
                      this.props.parentCallback({ ...product });
                      this.show();
                    }}
                    className="add-to-cart"
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <Notification />
      </Layout>
    );
  }
}

export default Home;
