import React, { Component } from "react";
import injectSheet from "react-jss";
class Album extends Component {
  componentDidMount() {
    console.log("data", this.props.data);
  }
  render() {
    const { classes } = this.props;
    return (
      <li className={classes.container}>
        <a
          href={this.props.data.link.attributes.href}
          style={{ color: "white", textDecoration: "none" }}
        >
          <img src={this.props.data["im:image"][2].label} alt="album image" />
          <p>{this.props.data["im:price"].label}</p>
          <p> {this.props.data.title.label}</p>
          <p>{this.props.data["im:releaseDate"].attributes.label}</p>
        </a>
      </li>
    );
  }
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 10
  }
};
export default injectSheet(styles)(Album);
