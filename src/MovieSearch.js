import React, { Component, Fragment } from "react";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={e => this.props.onSearch(e)}
            value={this.props.searchString}
          />
          <button onClick={() => this.props.onSearchMovie()}>SEARCH</button>
        </div>
      </div>
    );
  }
}

export default MovieSearch;
