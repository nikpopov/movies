import React, { Component, Fragment } from "react";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderMovieHeaders() {
    return (
      <Fragment>
        <div>Poster</div>
        <div>Title</div>
        <div>Year</div>
      </Fragment>
    );
  }

  renderMovieTable() {
    return this.props.data.map(item => {
      return (
        <div
          key={item.title}
          className="movieTableWrap"
          onClick={item => this.props.onShowInfo(item)}
        >
          <div>{item.poster}</div>
          <div>{item.title}</div>
          <div>{item.year}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderMovieHeaders()}
        {this.renderMovieTable()}
      </div>
    );
  }
}

export default MovieList;
