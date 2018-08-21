import React, { Component } from "react";
import Category from "./category";
import TopAlbums from "./topAlbums";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      albums: [],
      showAlbums: false,
      selectedCategory: ""
    };
    this.listOfCategories = [];
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json").then(
      res =>
        res.json().then(data => {
          this.setState(
            {
              data: data.feed,
              fetched: true,
              albums: data.feed.entry
            },
            () => console.log("albums *-*", this.state.albums)
          );
        })
    );
  }
  goToAlbums = category => {
    this.setState({ showAlbums: true, selectedCategory: category });
  };
  render() {
    this.state.fetched &&
      (this.listOfCategories = this.state.data.entry
        .map((entry, key) => {
          return entry.category.attributes.term;
        })
        .filter((Element, pos, arr) => {
          return arr.indexOf(Element) === pos;
        }));
    return (
      <div>
        <h2>Choose your category: </h2>
        <ul>
          {this.listOfCategories.map((category, key) => (
            <Category
              key={key}
              name={category}
              handleClick={() => this.goToAlbums(category)}
            />
          ))}
        </ul>
        <div>
          {this.state.showAlbums && (
            <TopAlbums
              category={this.state.selectedCategory}
              albums={this.state.albums}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Categories;
