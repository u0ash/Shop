import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div className="product">
        <img src={product.image} alt="" />
        <div className="info-holder">
          <p className="product-title">{product.title}</p>
          <p className="product-price">{product.price}</p>
        </div>
        <button className="add-to-cart"><img src="/images/supermarket.svg" alt=""/></button>
      </div>
    );
  }
}

export default Product;
