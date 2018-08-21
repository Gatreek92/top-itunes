import React, { Component } from "react";
import Categories from "./categories";
import { Link } from "react-router-dom";

class TopAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <button>Back home</button>
          </Link>
        </div>
        <h1>Top 100 Albums on itunes right now : </h1>
        <ul>
          See only : <Categories TopAlbums={this.state.albums} />
        </ul>
        <ul>
          <li>albums here</li>
        </ul>
      </div>
    );
  }
}
export default TopAlbums;
