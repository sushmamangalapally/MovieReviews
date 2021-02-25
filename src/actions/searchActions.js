import axios from 'axios';
import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
  FETCH_POPULAR_MOVIES,
  FETCH_RANDOM_MOVIES,
} from './types';
// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;

export const searchMovie = (text) => (dispatch) => {
  // dispatch is coming from the redux middleware
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}&language=en-US&page=1&include_adult=false`,
    )
    .then((response) => {
      console.log(response);
      return dispatch({
        type: FETCH_MOVIES,
        payload: response.data.results,
        loading: false,
      });
    })
    .catch((error) => console.log(error));
};

export const fetchPopularMovies = () => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
    )
    .then((response) => {
      console.log(response);
      return dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload: response.data.results,
        loading: true,
      });
    })
    .catch((error) => console.log(error));
};

// export const fetchGenres = text => dispatch => {
//     axios.get(`https://api.themoviedb.org/3/genre/movie?api_key=${API_KEY}&language=en-US`)
//     .then(response => dispatch({
//         type: FETCH_GENRES,
//         payload: response.data.results,
//         loading: false
//     }))
//     .catch(error => console.log(error));
// }

export const fetchMovie = (movieId) => (dispatch) => {
  console.log(movieId);
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    )
    .then((response) => {
      console.log(response);
      return dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
        loading: false,
      });
    })
    .catch((error) => console.log(error));
};

export const fetchRandomMovie = () => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`,
    )
    .then((response) => {
      console.log(response);
      return dispatch({
        type: FETCH_RANDOM_MOVIES,
        payload: response.data.results,
        loading: false,
      });
    })
    .catch((error) => console.log(error));
};

export const setLoading = () => ({
  type: LOADING,
});
