import React, { Component, Fragment } from "react";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import MovieSearch from "./MovieSearch";

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      data: [],
      movieDetails: {},
      searchString: ""
    };
  }

  componentDidMount() {
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=2b04e489&type=movie&r=json"
    )
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
    console.log(this.state.data);
  }

  onShowInfo(item) {
    const url = `http://www.omdbapi.com/?apikey=2b04e489&i=${item.id}&plot=full`;
    fetch(url)
      .then((res) => res.json())
      .then(data => this.setState({ movieDetails: data }))
      .catch(error => console.log(error));
  }

  onSearch(e) {
    const searchString = e.target.value;
    this.setState({ searchString });
  }

  onSearchMovie() {
    const movie = this.state.searchString;
    const url = "http://www.omdbapi.com/?apikey=2b04e489&s=" + movie;
    fetch(url)
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            data: data
          })
        /*  In case of returns movie item after search use code below        
        this.setState({
          item: data
        })
*/
      )
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <MovieSearch
          searchString={this.state.searchString}
          onSearch={this.onSearch}
        />
        <MovieList data={this.state.data} />
        <MovieDetails item={this.state.movieDetails} />
      </Fragment>
    );
  }
}

export default MovieContainer;
