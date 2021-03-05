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
    movies, text, type, favoritesMoviesList, bookmarkMoviesList, watchMoviesList, noMovies,
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

  console.log(moviesList);

  content = moviesList && moviesList.length > 0 ? (
    moviesList.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))
  ) : (text && text.length && noMovies === true) ? (
    <p>Sorry, no results found!</p>
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
  noMovies: state.movies.noMovies,
});
export default connect(mapStateToProps)(MoviesContainer);
