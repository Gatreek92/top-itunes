import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.homepage}>
          <h1 style={{ textAlign: "center" }}>Welcome to top-itunes !</h1>
          <p>Your best way to discover top albums of the moment on itunes.</p>
          <div style={{ textAlign: "center" }}>
            <Link to="/topAlbums">
              <button style={styles.button}>Lets Go !</button>
            </Link>
          </div>
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
  button: {
    fontFamily: "Metamorphous",
    backgroundColor: "#e84118",
    color: "white",
    border: "none",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    display: "inline-block",
    cursor: "pointer"
  }
};
export default HomePage;
