/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

export const MoviesContainer = (props) => {
  const {
    movies, text, type, favoritesMoviesList, bookmarkMoviesList, watchMoviesList, popularMovies,
  } = props;
  let content = '';
  let moviesList = [];
  if (type === 'landing') {
    moviesList = movies;
  } else if (type === 'favorite') {
    moviesList = favoritesMoviesList;
  } else if (type === 'watchlist') {
    moviesList = watchMoviesList;
  } else if (type === 'bookmark') {
    moviesList = bookmarkMoviesList;
  }

  console.log('dsds dsd');
  console.log(popularMovies);

  if (popularMovies) {
    moviesList = popularMovies;
  }

  content = moviesList && moviesList.length > 0 ? (
    moviesList.map((movie, index) => (
      <MovieCard key={movie.id + index} movie={movie} />
    ))
  ) : text && text.length ? (
    <p>
      {' '}
    </p>
  ) : null;
  return (
    <div className="row">
      {content}
    </div>
  );
};
const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  favoritesMoviesList: state.moviesList.favoritesMoviesList,
  watchMoviesList: state.moviesList.watchMoviesList,
  bookmarkMoviesList: state.moviesList.bookmarkMoviesList,
  movies: state.movies.movies,
  text: state.movies.text,
//   popularMovies: state.movies.popularMovies,
});
export default connect(mapStateToProps)(MoviesContainer);
