/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import {
  searchMovie,
  fetchMovies,
  setLoading,
  fetchPopularMovies,
} from '../actions/searchActions';

export const SearchForm = (props) => {
  function onChange(e) {
    props.searchMovie(e.target.value);
    if (e.target.value === '') {
      props.fetchPopularMovies();
      props.setLoading();
    }
  }
  function onSubmit(e) {
    e.preventDefault();
    props.fetchMovies(props.text);
    props.setLoading();
  }
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <h2 className="display-4 mb-3">
        <i className="fa fa-search" />
        {' '}
        Search for a movie...
      </h2>
      <form id="searchForm" role="search" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          name="searchText"
          placeholder="Search Movies, TV Series ..."
          onChange={onChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-bg mt-3"
        >
          Search
        </button>
      </form>
    </div>
  );
};
const mapStatesToProps = (state) => ({
  text: state.movies.text,
});
export default connect(mapStatesToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
  fetchPopularMovies,
})(SearchForm);
