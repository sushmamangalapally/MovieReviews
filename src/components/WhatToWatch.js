/* eslint-disable no-shadow */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { fetchRandomMovie } from '../actions/searchActions';

function WhatToWatch({
  favoritesMoviesList,
  watchMoviesList,
  randomMovies,
  fetchRandomMovie,
}) {
  const [selectAns, setSelectAns] = useState('');
  const [movie, setMovie] = useState(null);
  const [showChangeButton, setShowChangeButton] = useState(null);

  function handleChange(e) {
    setSelectAns(e.target.value);
  }
  function randomizeList(max) {
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - 0) + 0);
  }
  function handleClick() {
    const movieObj = selectAns === 'random'
      ? randomMovies[randomizeList(randomMovies.length)]
      : selectAns === 'favorites'
        ? favoritesMoviesList[randomizeList(favoritesMoviesList.length)]
        : selectAns === 'watchlist'
          ? watchMoviesList[randomizeList(watchMoviesList.length)]
          : null;
    setMovie(movieObj);
  }

  useEffect(() => {
    if (!randomMovies.length) fetchRandomMovie();
  }, [randomMovies]);

  async function handleSubmit(event) {
    event.preventDefault();
    let movieObj = null;
    if (selectAns === 'favorites') {
      movieObj = favoritesMoviesList[randomizeList(favoritesMoviesList.length)];
    } else if (selectAns === 'watchlist') {
      movieObj = watchMoviesList[randomizeList(watchMoviesList.length)];
    } else if (selectAns === 'random') {
      movieObj = randomMovies[randomizeList(randomMovies.length)];
    }

    setMovie(movieObj);
    setShowChangeButton(true);
  }
  return (
    <main>
      <div className="section">
        <div className="container">
          <div className="row">
            <h2 className="display-4 mb-3 movieRol">
              Movies Roulette
            </h2>
            <div className="input-field col s12 movieWatchRol">
              <form onSubmit={handleSubmit} keyPress={handleSubmit}>
                <label htmlFor="What should you watch?">
                  <span>What should you watch?</span>
                  <select
                    value={selectAns}
                        //   defaultValue={selectAns}
                    style={{ display: 'block' }}
                    onChange={handleChange}
                    keyPress={handleChange}
                  >
                    <option value="" disabled selected>
                      Choose your option
                    </option>
                    {favoritesMoviesList.length && (
                    <option value="favorites">
                      Select from your favorites
                    </option>
                    )}
                    {watchMoviesList.length && (
                    <option value="watchlist">
                      Select from your watchlist
                    </option>
                    )}
                    <option value="random">
                      Select from any movies
                    </option>
                  </select>
                </label>
                <br />
                <input type="submit" className="btn btn-primary btn-bg mt-3" value="Submit" />
              </form>
            </div>
            {showChangeButton === true && movie && (
            <button
              className="btn btn-primary btn-bg mt-3"
              onClick={handleClick}
              type="button"
            >
              Change movie
            </button>
            )}
            {movie && <MovieCard main="true" movie={movie} />}
          </div>
        </div>
      </div>
    </main>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    favoritesMoviesList: state.moviesList.favoritesMoviesList,
    watchMoviesList: state.moviesList.watchMoviesList,
    loading: state.moviesList.loading,
    randomMovies: state.movies.randomMovies,
  };
};
export default connect(mapStateToProps, { fetchRandomMovie })(WhatToWatch);
// export default connect(mapStateToProps)(WhatToWatch);
