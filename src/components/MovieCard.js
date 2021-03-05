/* eslint-disable no-shadow */
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

export const MovieCard = ({
  favoritesMoviesList,
  bookmarkMoviesList,
  movie,
  watchMoviesList,
  key,
  main,
  addToFavorites,
  removeFromFavorites,
  addToWatchlist,
  removeFromWatchlist,
  addToBookmark,
  removeFromBookmark,
}) => {
  const [fave, setFave] = useState(favoritesMoviesList
    ? favoritesMoviesList.find(
      (favMov) => favMov.id === movie.id,
    )
    : false);
  const [bookMrk, setBookMrk] = useState(bookmarkMoviesList
    ? bookmarkMoviesList.find(
      (bkmrkMov) => bkmrkMov.id === movie.id,
    )
    : false);
  const [watch, setWatch] = useState(watchMoviesList
    ? watchMoviesList.find(
      (watchMov) => watchMov.id === movie.id,
    )
    : false);
  function favoriteOrUnfavorite(e) {
    e.preventDefault();
    // console.log(this);
    const faveMovies = favoritesMoviesList || [];
    const isFave = faveMovies
      ? faveMovies.find((favMov) => favMov.id === movie.id)
      : null;
    if (isFave) {
      removeFromFavorites(faveMovies, movie);
    } else {
      addToFavorites(faveMovies, movie);
    }
    setFave(!fave);
  }
  function bookmarkOrUnbookmark(e) {
    e.preventDefault();
    const bookmarkMovies = bookmarkMoviesList || [];
    const isBookmarked = bookmarkMovies
      ? bookmarkMovies.find(
        (bookmark) => bookmark.id === movie.id,
      )
      : null;
    if (isBookmarked) {
      removeFromBookmark(bookmarkMovies, movie);
    } else {
      addToBookmark(bookmarkMovies, movie);
    }
    setBookMrk(!bookMrk);
  }
  function watchOrNotWatch(e) {
    e.preventDefault();
    // console.log(this);
    const watchListMovies = watchMoviesList || [];
    const isAddedToWatchList = watchListMovies
      ? watchListMovies.find(
        (watchMovie) => watchMovie.id === movie.id,
      )
      : null;
    if (isAddedToWatchList) {
      removeFromWatchlist(watchListMovies, movie);
    } else {
      addToWatchlist(watchListMovies, movie);
    }
    setWatch(!watch);
  }

  // console.log('moviessss ');
  // console.log(movie);

  const movieInfo = movie;
  const index = key;
  const changeMainStyle = main === 'true' ? 'col s12 center-align z-depth-5 movie-card' : 'col s3 center-align z-depth-5 movie-card';
  const divLandingStyle = {
    width: '100%',
    height: '370px',
  };
  const divQuizStyle = {
    width: '330px',
    height: '550px',
  };
  const changeMainImgStyle = main === 'true' ? divQuizStyle : divLandingStyle;
  //   const faveMovies = moviesList && moviesList.favoritesMoviesList
  //     ? moviesList.favoritesMoviesList
  //     : null;

  const date = new Date(movieInfo.release_date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateReleased = date.toLocaleDateString('en-US', options);
  //   const today = new Date();
  //   let notReleasedYet = false;
  //   if (date > today) {
  //     notReleasedYet = true;
  //   }
  let movieTitle = movieInfo.title;
  if (movieTitle.length > 35) {
    movieTitle = `${movieTitle.substr(0, 24)}...`;
  }

  return (
    <div className={changeMainStyle} key={index}>
      <div className="col-content ">
        <div className="img-content" role="img" aria-label="Poster of the movie">
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
          <span>{movieTitle}</span>
          <p>{dateReleased}</p>
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
          onKeyPress={favoriteOrUnfavorite}
        >
          {favoritesMoviesList.find(
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
          onKeyPress={watchOrNotWatch}
        >
          {watchMoviesList.find(
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
          onKeyPress={bookmarkOrUnbookmark}
        >
          {bookmarkMoviesList.find(
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
