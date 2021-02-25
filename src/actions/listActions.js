/* eslint-disable import/extensions */
import {
  ADD_TO_FAVORITES,
  ADD_TO_BOOKMARKS,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_FAVORITES,
  REMOVE_FROM_BOOKMARKS,
  REMOVE_FROM_WATCHLIST,
  // LOADING
} from './types.js';

export const addToFavorites = (movies, favoriteMovie) => (dispatch) => {
  const favoriteIdExists = movies
    ? movies.find((movie) => movie.id === favoriteMovie.id)
    : null;
  const favMovies = movies;

  if (!favoriteIdExists) {
    favMovies.push(favoriteMovie);
  }
  localStorage.setItem('favMovies', JSON.stringify(favMovies));
  dispatch({ type: ADD_TO_FAVORITES, payload: favMovies });
};

export const removeFromFavorites = (movies, favoriteMovie) => (dispatch) => {
  console.log(movies);
  const favMovies = movies.slice().filter((a) => a.id !== favoriteMovie.id);
  localStorage.setItem('favMovies', JSON.stringify(favMovies));
  dispatch({ type: REMOVE_FROM_FAVORITES, payload: favMovies });
};

export const addToWatchlist = (movies, watchMovie) => (dispatch) => {
  console.log('addToWatchlist');
  console.log(movies);
  console.log(watchMovie);
  const watchMovieIdExists = movies
    ? movies.find((movie) => movie.id === watchMovie.id)
    : null;
  const watchlistMovies = movies;

  if (!watchMovieIdExists) {
    watchlistMovies.push(watchMovie);
  }
  localStorage.setItem('watchMovies', JSON.stringify(watchlistMovies));
  dispatch({ type: ADD_TO_WATCHLIST, payload: watchlistMovies });
};

export const removeFromWatchlist = (movies, watchMovie) => (dispatch) => {
  console.log(movies);
  const watchlistMovies = movies
    .slice()
    .filter((a) => a.id !== watchMovie.id);
  localStorage.setItem('watchMovies', JSON.stringify(watchlistMovies));
  dispatch({ type: REMOVE_FROM_WATCHLIST, payload: watchlistMovies });
};

export const addToBookmark = (movies, bookmark) => (dispatch) => {
  const bookmarkIdExists = movies
    ? movies.find((movie) => movie.id === bookmark.id)
    : null;
  const bookmarkMovies = movies;

  if (!bookmarkIdExists) {
    bookmarkMovies.push(bookmark);
  }
  localStorage.setItem('bookmarkMovies', JSON.stringify(bookmarkMovies));
  dispatch({ type: ADD_TO_BOOKMARKS, payload: bookmarkMovies });
};

export const removeFromBookmark = (movies, bookmark) => (dispatch) => {
  console.log(movies);
  const bookmarkMovies = movies.slice().filter((a) => a.id !== bookmark.id);
  localStorage.setItem('bookmarkMovies', JSON.stringify(bookmarkMovies));
  dispatch({ type: REMOVE_FROM_BOOKMARKS, payload: bookmarkMovies });
};

// export const setLoading = () => {
//     return {
//         type: LOADING
//     }
// }
