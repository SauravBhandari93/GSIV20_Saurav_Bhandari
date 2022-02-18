import React, { Component } from "react";
import { API_URL, API_KEY } from "../../config";
import Navigation from "../Elements/Navigation/Navigation";
import MovieInfo from "../Elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../Elements/MovieInfoBar/MovieInfoBar";
import Spinner from "../Elements/Spinner/Spinner";
import "./Movie.css";

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: result }, () => {
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then((result) => result.json())
              .then((result) => {
                const directors = result.crew.filter(
                  (member) => member.job === "Director"
                );

                this.setState({
                  actors: result.cast,
                  directors,
                  loading: false,
                });
              });
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  render() {
    return (
      <div className="rmdb-movie">
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
            />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />
          </div>
        ) : null}
        {!this.state.actors && !this.state.loading ? (
          <h1>No Movie Found!</h1>
        ) : null}
        {this.state.loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default Movie;
