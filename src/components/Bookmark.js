/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';

export const Bookmark = (props) => {
  const { moviesList } = props;
  // eslint-disable-next-line max-len
  const notEmpty = moviesList && moviesList.bookmarkMoviesList && moviesList.bookmarkMoviesList.length !== 0;

  return (
    <main>
      <div className="section">
        <div className="listContainer">
          <h2>Bookmarks</h2>
          {!notEmpty ? <p>No list yet</p> : null}
          <MoviesContainer type="bookmark" />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    moviesList: state.moviesList,
    textTitle: state.moviesList.textTitle,
    loading: state.moviesList.loading,
  };
};
export default connect(mapStateToProps)(Bookmark);
