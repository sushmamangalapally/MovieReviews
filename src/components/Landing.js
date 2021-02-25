/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import Spinner from './Spinner';
import { fetchPopularMovies, setLoading } from '../actions/searchActions';

export const Landing = (props) => {
  useEffect(() => {
    props.fetchPopularMovies();
    props.setLoading();
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
export default connect(mapStateToProps, { fetchPopularMovies, setLoading })(
  Landing,
);
