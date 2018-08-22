import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.homepage}>
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
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#487eb0",
    color: "white"
  },
  homepage: {
    //flex: 1
  }
};
export default HomePage;
