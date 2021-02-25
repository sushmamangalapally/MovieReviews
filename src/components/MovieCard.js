/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import missingImg from './download.png';
import {
  addToFavorites,
  removeFromFavorites,
  addToWatchlist,
  removeFromWatchlist,
  addToBookmark,
  removeFromBookmark,
} from '../actions/listActions';

export const MovieCard = (props) => {
  const [fave, setFave] = useState(props.favoritesMoviesList
    ? props.favoritesMoviesList.find(
      (favMov) => favMov.id === props.movie.id,
    )
    : false);
  const [bookMrk, setBookMrk] = useState(props.bookmarkMoviesList
    ? props.bookmarkMoviesList.find(
      (bkmrkMov) => bkmrkMov.id === props.movie.id,
    )
    : false);
  const [watch, setWatch] = useState(props.watchMoviesList
    ? props.watchMoviesList.find(
      (watchMov) => watchMov.id === props.movie.id,
    )
    : false);
  function favoriteOrUnfavorite(e) {
    e.preventDefault();
    console.log(this);
    const faveMovies = props.favoritesMoviesList
      ? props.favoritesMoviesList
      : [];
    const isFave = faveMovies
      ? faveMovies.find((favMov) => favMov.id === props.movie.id)
      : null;
    if (isFave) {
      props.removeFromFavorites(faveMovies, props.movie);
    } else {
      props.addToFavorites(faveMovies, props.movie);
    }
    setFave(!fave);
  }
  function bookmarkOrUnbookmark(e) {
    e.preventDefault();
    const bookmarkMovies = props.bookmarkMoviesList
      ? props.bookmarkMoviesList
      : [];
    const isBookmarked = bookmarkMovies
      ? bookmarkMovies.find(
        (bookmark) => bookmark.id === props.movie.id,
      )
      : null;
    if (isBookmarked) {
      props.removeFromBookmark(bookmarkMovies, props.movie);
    } else {
      props.addToBookmark(bookmarkMovies, props.movie);
    }
    setBookMrk(!bookMrk);
  }
  function watchOrNotWatch(e) {
    e.preventDefault();
    console.log(this);
    const watchListMovies = props.watchMoviesList
      ? props.watchMoviesList
      : [];
    const isAddedToWatchList = watchListMovies
      ? watchListMovies.find(
        (watchMovie) => watchMovie.id === props.movie.id,
      )
      : null;
    if (isAddedToWatchList) {
      props.removeFromWatchlist(watchListMovies, props.movie);
    } else {
      props.addToWatchlist(watchListMovies, props.movie);
    }
    setWatch(!watch);
  }

  const movie = props;
  const movieInfo = movie.movie;
  const index = props.key;
  const changeMainStyle = props.main === 'true' ? 'col s12 center-align z-depth-5 movie-card' : 'col s3 center-align z-depth-5 movie-card';
  const divLandingStyle = {
    width: '100%',
    height: '370px',
  };
  const divQuizStyle = {
    width: '330px',
    height: '550px',
  };
  const changeMainImgStyle = props.main === 'true' ? divQuizStyle : divLandingStyle;
  //   const faveMovies = props.moviesList && props.moviesList.favoritesMoviesList
  //     ? props.moviesList.favoritesMoviesList
  //     : null;

  return (
    <div className={changeMainStyle} key={index}>
      <div className="col-content ">
        <div className="img-content">
          <img
            className="poster"
            src={
                                movieInfo.poster_path
                                  ? `https://image.tmdb.org/t/p/w500/${
                                    movieInfo.poster_path}`
                                  : missingImg
                            }
            alt={`Poster of ${movieInfo.title}`}
            style={changeMainImgStyle}
          />
        </div>
        <div className="info-content">
          <h5>{movieInfo.title}</h5>
          <p>{movieInfo.release_date}</p>
          {/*
                            <Ratings index={index} id={details["id"]} get_rating={emptyRating} get_date={notReleasedYet}/>
                            <i className="iconsChange small material-icons"
                                onClick={this.addFav}
                                onMouseOver={this.fav_over}
                                onMouseOut={this.fav_out}>
                                {fav}
                            </i>
                            <i className="iconsChange small material-icons"
                                onClick={this.addWatch}
                                onMouseOver={this.watch_over}
                                onMouseOut={this.watch_out}>
                                {watch}
                            </i> */}
        </div>
        <Link
          className="waves-effect waves-light btn-small"
          style={{ 'margin-bottom': '5px' }}
          to={`/movie/${movieInfo.id}`}
        >
          Details
        </Link>
        <br />
        <button
          type="button"
          className="iconsChange waves-effect waves-light btn-small"
          onClick={favoriteOrUnfavorite}
          onKeyDown={favoriteOrUnfavorite}
        >
          {props.favoritesMoviesList.find(
            (movieId) => movieId.id === movieInfo.id,
          ) ? (
            <i className="material-icons">favorite</i>
            ) : (
              <i className="material-icons">favorite_border</i>
            )}
        </button>

        <button
          type="button"
          className="iconsChange waves-effect waves-light btn-small"
          onClick={watchOrNotWatch}
          onKeyDown={watchOrNotWatch}
        >
          {props.watchMoviesList.find(
            (movieId) => movieId.id === movieInfo.id,
          ) ? (
            <i className="material-icons">playlist_add_check</i>
            ) : (
              <i className="material-icons">playlist_add</i>
            )}
        </button>

        <button
          type="button"
          className="iconsChange waves-effect waves-light btn-small"
          onClick={bookmarkOrUnbookmark}
          onKeyDown={bookmarkOrUnbookmark}
        >
          {props.bookmarkMoviesList.find(
            (movieId) => movieId.id === movieInfo.id,
          ) ? (
            <i className="material-icons">bookmark</i>
            ) : (
              <i className="material-icons">bookmark_border</i>
            )}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    favoritesMoviesList: state.moviesList.favoritesMoviesList,
    bookmarkMoviesList: state.moviesList.bookmarkMoviesList,
    watchMoviesList: state.moviesList.watchMoviesList,
    text: state.moviesList.textTitle,
    loading: state.moviesList.loading,
  };
};
export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
  addToWatchlist,
  removeFromWatchlist,
  addToBookmark,
  removeFromBookmark,
})(MovieCard);
