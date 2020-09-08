import React, { Component } from "react";
import Layout from "../components/Layout";
import "./Cart.css";

class Cart extends Component {
  add(title) {
    const retrievedData = localStorage.getItem("cart");
    let cartItems = JSON.parse(retrievedData);
    ++cartItems.find((i) => i.title === title).quantity;
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  minus(title) {
    const retrievedData = localStorage.getItem("cart");
    let cartItems = JSON.parse(retrievedData);
    let item = cartItems.find((i) => i.title === title);

    if (item.quantity === 1)
      cartItems = cartItems.filter((item) => item.title !== title);
    else --cartItems.find((i) => i.title === title).quantity;

    console.log(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  render() {
    const retrievedData = localStorage.getItem("cart");
    let cartItems = JSON.parse(retrievedData);
    return (
      <Layout>
        <div className="cart-container">
          <h3 className="cart-title">Cart</h3>
          <div className="cart-item cart-header">
            <div>Image</div>
            <div>Title</div>
            <div>Price</div>
            <div>Qty</div>
            <div></div>
            <div>Total</div>
          </div>
          {localStorage.getItem("cart") &&
            cartItems.map((item, index) => {
              return (
                <div className="cart-item" key={index}>
                  <div className="image-container">
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>{item.title}</div>
                  <div>{item.price}</div>
                  <div>{item.quantity}</div>
                  <div className="change-qty">
                    <a
                      onClick={() => {
                        this.minus(item.title);
                      }}
                      href=""
                    >
                      <img src="images/minus.svg" alt="" />
                    </a>

                    <a
                      onClick={() => {
                        this.add(item.title);
                      }}
                      href=""
                    >
                      <img src="images/plus.svg" alt="" />
                    </a>
                  </div>
                  <div>{item.quantity * item.price}</div>
                </div>
              );
            })}
        </div>
      </Layout>
    );
  }
}

export default Cart;
