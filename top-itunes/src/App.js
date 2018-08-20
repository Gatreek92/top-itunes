import React, { Component } from "react";
import HomePage from "./components/homePage.js";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <HomePage />
      </Router>
    );
  }
}

export default App;
