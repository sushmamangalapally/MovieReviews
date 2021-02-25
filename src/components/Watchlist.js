/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';

export const Watchlist = (props) => {
  const { moviesList } = props;
  const notEmpty = moviesList && moviesList.watchMoviesList && moviesList.watchMoviesList.length !== 0;

  return (
    <main>
      <div className="section">
        <div className="listContainer">
          <h2>Watchlist</h2>
          {!notEmpty ? <p>No list yet</p> : null}
          <MoviesContainer type="watchlist" />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  textTitle: state.moviesList.textTitle,
  loading: state.moviesList.loading,
});
export default connect(mapStateToProps)(Watchlist);
