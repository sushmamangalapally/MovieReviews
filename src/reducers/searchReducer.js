/* eslint-disable func-names */
import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
  FETCH_POPULAR_MOVIES,
  FETCH_MORE_POPULAR_MOVIES,
  FETCH_RANDOM_MOVIES,
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: [],
  randomMovies: [],
  noMovies: false,
  popularMovie: 1,
  searchedMovies: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        movies: [],
        loading: false,
        searchedMovies: true,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        noMovies: (action.payload.length === 0),
        loading: false,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        searchedMovies: false,
      };
    case FETCH_MORE_POPULAR_MOVIES:
      return {
        ...state,
        movies: state.movies ? [...state.movies, ...action.payload] : action.payload,
        loading: false,
        searchedMovies: false,
      };
    case FETCH_RANDOM_MOVIES:
      return {
        ...state,
        randomMovies: action.payload,
        loading: false,
        searchedMovies: false,
      };
    default:
      return state;
  }
}
