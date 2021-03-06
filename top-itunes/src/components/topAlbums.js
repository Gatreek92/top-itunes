import React, { Component } from "react";
import Categories from "./categories";
import Album from "./album";
import injectSheet from "react-jss";
import Spinner from "react-spinkit";
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
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <Link to="/">
            <button className={classes.backBtn}>&larr; Back home</button>
          </Link>
        </div>
        <h1 className={classes.title}>Top 100 Albums on itunes right now : </h1>
        <div className={classes.contentContainer}>
          {this.state.fetched ? (
            <div>
              <h2> See only : </h2>
              <ul className={classes.categoriesContainer}>
                <Categories
                  categoriesList={this.state.categories}
                  selectCategory={this.selectCategory}
                />
                <li
                  style={{
                    backgroundColor: "#fbc531",
                    color: "white",
                    padding: 5,
                    marginTop: 5,
                    listStyle: "none"
                  }}
                >
                  <a
                    style={{ color: "white" }}
                    href="#"
                    onClick={() =>
                      this.setState({ albums: this.state.data.entry })
                    }
                  >
                    all albums
                  </a>
                </li>
              </ul>

              <ul className={classes.albumsContainer}>
                {this.state.albums.map((album, key) => (
                  <Album data={album} key={key} />
                ))}
              </ul>
            </div>
          ) : (
            <Spinner name="ball-grid-pulse" color="orange" />
          )}
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    minHeight: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "column"
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  title: {
    textAlign: "center"
  },
  categoriesContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  albumsContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: 0
  },
  backBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer"
  }
};
export default injectSheet(styles)(TopAlbums);
