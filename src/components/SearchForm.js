/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  searchMovie,
  fetchMovies,
  setLoading,
  fetchPopularMovies,
} from '../actions/searchActions';

export const SearchForm = (props) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  function onChange(e) {
    props.searchMovie(1, e.target.value);
    // setSearch(e.target.value);
    // if (e.target.value === '') {
    //   props.fetchPopularMovies();
    //   props.setLoading();
    // }
  }
  function onSubmit(e) {
    e.preventDefault();
    setPage((state) => (1));
    console.log(e.target.value);
    console.log(props.text);
    setSearch((state) => (props.text));
    console.log(search);
    props.fetchMovies(1, props.text);
    props.setLoading();
  }

  function handleBackClick() {
    setPage((state) => (state + 1));
    props.fetchMovies(page, props.text);
  }

  useEffect(() => {
    async function handleScroll() {
      const scrollHeight = document.body.scrollHeight;
      const totalHeight = window.scrollY + window.innerHeight;

      if (totalHeight >= scrollHeight) {
        console.log('at the bottom');
        await setPage((state) => (state + 1));
        console.log('page2');
        console.log(page);
        console.log(props);
        console.log(search);
        if (search.length) {
          if (page === 1) {
            await setPage((state) => (state + 1));
            await props.setLoading();
            await props.fetchMovies(2, search);
          } else {
            await props.fetchMovies(page, search);
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, setPage, search]);
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
      {/* <button type="submit" onClick={handleBackClick}>Back to the top</button> */}
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
