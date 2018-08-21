import React, { Component } from "react";
class Album extends Component {
  componentDidMount() {
    console.log("data", this.props.data);
  }
  render() {
    return <li>{this.props.data.title.label}</li>;
  }
}

export default Album;
