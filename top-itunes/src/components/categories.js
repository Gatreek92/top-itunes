import React, { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [],
      allCategories: []
    };
  }
  componentDidMount() {
    let tempCategories = this.props.categoriesList.concat();
    tempCategories = tempCategories.filter((Element, pos, arr) => {
      return arr.indexOf(Element) === pos;
    });
    this.setState({
      categoriesList: tempCategories,
      allCategories: this.props.categoriesList
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.categoriesList.map((category, key) => {
            return (
              <li key={key}>
                <a href="#" onClick={() => this.props.selectCategory(category)}>
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Categories;
