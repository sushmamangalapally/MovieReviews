/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import { addToFavorites, removeFromFavorites } from '../actions/listActions';

export const Favorites = (props) => {
  const { moviesList } = props;
  const notEmpty = moviesList && moviesList.favoritesMoviesList && moviesList.favoritesMoviesList.length !== 0;

  return (
    <main>
      <div className="section">
        <div className="listContainer">
          <h2>Favorites</h2>
          {!notEmpty ? <p>No list yet</p> : null}
          <MoviesContainer type="favorite" />
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
export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
})(Favorites);
