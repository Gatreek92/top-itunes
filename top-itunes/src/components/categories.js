import React, { Component } from "react";
import injectSheet from "react-jss";
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
    const { classes } = this.props;
    return this.state.categoriesList.map((category, key) => {
      return (
        <li
          className={classes.listItem}
          key={key}
          onClick={() => this.props.selectCategory(category)}
        >
          {category}
        </li>
      );
    });
  }
}
const styles = {
  listItem: {
    padding: 5,
    color: "#fbc531",
    backgroundColor: "white",
    cursor: "pointer",
    marginRight: 5,
    marginTop: 5,
    listStyle: "none",
    "&:hover": { backgroundColor: "#fbc531", color: "white" }
  }
};
export default injectSheet(styles)(Categories);
