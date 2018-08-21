import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Categories from "./categories.js";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to top-itunes !</h1>
          <p>Your best way to discover top albums on itunes.</p>
          <Link to="/categories">
            <h2>Lets Go !</h2>
          </Link>
        </div>
        <Route path="/categories" component={Categories} />
      </div>
    );
  }
}

export default HomePage;
