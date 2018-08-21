import React, { Component } from "react";
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
    return (
      <div>
        <h2>Choose your category: </h2>
      </div>
    );
  }
}
export default Categories;
