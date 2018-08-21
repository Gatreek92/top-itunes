import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <li key={this.props.key}>
        <a href="#" onClick={() => this.props.handleClick(this.props.name)}>
          {this.props.name}
        </a>
      </li>
    );
  }
}
export default Category;
