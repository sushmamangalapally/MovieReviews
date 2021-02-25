/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import MovieCard from './MovieCard';

export const SearchMovie = (props) => {
  const { movies, text } = props;
  let content = '';

  content = movies && movies.length > 0 ? (
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))
  ) : text.length ? (
    <p>Sorry, no results found!</p>
  ) : null;
  return (
    <main>
      <div className="section">
        <div className="container">
          <SearchForm />
          {/* <Spinner/>
                    <MoviesContainer/> */}
          {/* {loading ? <Spinner/> : <MoviesContainer/>} */}
          <div className="row">
            {content}
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  text: state.movies.text,
  loading: state.movies.loading,
});
export default connect(mapStateToProps)(SearchMovie);
