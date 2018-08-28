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
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: "center",
    textAlign: "center",
    maxWidth: 235,
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    backgroundColor: "#487eb0",
    "&:hover": {
      transform: "scale(1.1)",
      background: "rgb(251,197,49)",
      background:
        "linear-gradient(354deg, rgba(251,197,49,1) 0%, rgba(72,72,176,1) 70%)"
    }
  }
};
export default injectSheet(styles)(Album);
