/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import Spinner from './Spinner';
import { fetchPopularMovies, fetchMorePopularMovies, setLoading } from '../actions/searchActions';

export const Landing = (props) => {
  // eslint-disable-next-line prefer-const
  let [page, setPage] = useState(1);
  async function handleScroll() {
    const { scrollHeight } = document.body;
    const totalHeight = window.scrollY + window.innerHeight;
    if (totalHeight >= scrollHeight) {
      await setPage((state) => (state + 1));
      console.log(page);
      page += 1;
      console.log(page);
      await props.fetchMorePopularMovies(page);
    }
  }
  useEffect(() => {
    setPage(1);
    props.fetchPopularMovies();
    props.setLoading();
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { loading } = props;
  return (
    <main>
      <div className="section">
        <div className="container">
          {loading ? <Spinner /> : <MoviesContainer type="landing" />}
        </div>
      </div>
    </main>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movies,
  loading: state.movies.loading,
});
export default connect(mapStateToProps, { fetchPopularMovies, fetchMorePopularMovies, setLoading })(
  Landing,
);
