import React, { Component } from "react";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="label">Title</div>
          <div className="data">{this.props.item.title}</div>
        </div>
        <div className="row">
          <div className="label">Poster</div>
          <div className="data">{this.props.item.poster}</div>
        </div>
        <div className="row">
          <div className="label">Release date</div>
          <div className="data">{this.props.item.releaseDate}</div>
        </div>
        <div className="row">
          <div className="label">Director</div>
          <div className="data">{this.props.item.director}</div>
        </div>
        <div className="row">
          <div className="label">List of actors</div>
          <div className="data">{this.props.item.listOfActors}</div>
        </div>
        <div className="row">
          <div className="label">A full plot</div>
          <div className="data">{this.props.item.fullPlot}</div>
        </div>
        <div className="row">
          <div className="label">Metascore</div>
          <div className="data">{this.props.item.metascore}</div>
        </div>
        <div className="row">
          <div className="label">imdRating</div>
          <div className="data">{this.props.item.imdRating}</div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
