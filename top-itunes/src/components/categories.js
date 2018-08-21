import React, { Component } from "react";
import Category from "./category";
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.listOfCategories = [];
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json").then(
      res =>
        res
          .json()
          .then(data => this.setState({ data: data.feed, fetched: true }))
    );
  }
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
          {this.listOfCategories.map((category, key) => {
            return (
              <li key={key}>
                <Category name={category} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Categories;
