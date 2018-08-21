import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to top-itunes !</h1>
          <p>Your best way to discover top albums on itunes.</p>
          <Link to="/topAlbums">
            <h2>Lets Go !</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
