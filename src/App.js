import React, { useState, Component } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import data from "./data.json";
import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    let cart = this.state.cart;
    let item = { ...product, quantity: 1 };

    //duplicate products
    if (cart.some((i) => i.title == product.title)) {
      cart.find((i) => i.title == product.title).quantity++;
    } else {
      cart.push(item);
    }

    this.setState((state) => {
      return {
        cart,
      };
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home parentCallback={this.addToCart} />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/About">
            <About info={data.AboutUs} />
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs info={data.ContactUs} />
          </Route>
          <Route exact path="/Cart">
            <Cart cartItems={this.state.cart} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
