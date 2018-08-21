import React, { Component } from "react";
import HomePage from "./components/homePage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopAlbums from "./components/topAlbums.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/topAlbums" component={TopAlbums} />
        </div>
      </Router>
    );
  }
}

export default App;
