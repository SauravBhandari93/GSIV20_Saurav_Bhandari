import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = (props) => {
  return (
    <div className="rmdb-moviethumb">
      {props.clickable ? (
        <Link
          to={{
            pathname: `/${props.movieId}`,
            movieName: `${props.movieName}`,
          }}
        >
          <div className="CoverImage">
            <img src={props.image} alt="moviethumb" />
          </div>

          <div className="MovieName">{props.movieName}</div>
          <div className="InfoColumn">
            <div className="MovieInfo">Rating : {props.movieRating}</div>
            <div className="MovieInfo">
              Release Date : {props.movieReleaseDate}{" "}
            </div>
          </div>
          <div className="MovieOverview">
            {props.movieOverview.slice(0, 150)}
          </div>
        </Link>
      ) : (
        <img src={props.image} alt="moviethumb" />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};

export default MovieThumb;
