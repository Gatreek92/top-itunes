import React, { Component } from "react";
import Categories from "./categories";
import Album from "./album";

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
            () => console.log("this.state.albums", this.state.albums)
          );
        })
    );
  }

  selectCategory = e => {
    let tempAlbums = this.state.data.entry.concat();
    tempAlbums = tempAlbums.filter(
      (Element, pos, arr) => Element.category.attributes.term === e
    );
    this.setState({ albums: tempAlbums });
  };

  render() {
    return (
      <div style={styles.container}>
        <div>
          <Link to="/">
            <button>Back home</button>
          </Link>
        </div>
        <h1 style={{ textAlign: "center" }}>
          Top 100 Albums on itunes right now :{" "}
        </h1>
        {this.state.fetched && (
          <div>
            <ul>
              See only :
              <Categories
                categoriesList={this.state.categories}
                selectCategory={this.selectCategory}
              />
            </ul>
            <a
              href="#"
              onClick={() => this.setState({ albums: this.state.data.entry })}
            >
              See all albums
            </a>
            <ul>
              {this.state.albums.map((album, key) => (
                <Album data={album} key={key} />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
const styles = {
  container: {
    backgroundColor: "#487eb0",
    color: "white",
    minHeight: "100%"
  }
};
export default TopAlbums;
