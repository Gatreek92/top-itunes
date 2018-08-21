import React, { Component } from "react";
class TopAlbums extends Component {
  render() {
    return (
      <div>
        <h2>Top {this.props.category} Albums </h2>
        <ul>
          {this.props.albums
            .filter((Element, pos, arr) => {
              return Element.category.attributes.term === this.props.category;
            })
            .map((album, key) => {
              console.log("albumm", album);
              return <li key={key}>Album name : {album.title.label}</li>;
            })}
        </ul>
      </div>
    );
  }
}
export default TopAlbums;
