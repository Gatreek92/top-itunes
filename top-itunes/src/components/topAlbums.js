import React, { Component } from "react";
import Categories from "./categories";
import { Link } from "react-router-dom";

class TopAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      albums: [],
      categories: [],
      fetched: false
    };
  }
  componentDidMount() {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json").then(
      res =>
        res.json().then(data => {
          this.setState(
            {
              data: data.feed,
              albums: data.feed.entry,
              categories: data.feed.entry.map(
                album => album.category.attributes.term
              ),
              fetched: true
            },
            () => console.log("this.state.categories", this.state.categories)
          );
        })
    );
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
        {this.state.fetched && (
          <div>
            <ul>
              See only : <Categories categoriesList={this.state.categories} />
            </ul>
            <ul>
              <li>albums here</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
export default TopAlbums;
