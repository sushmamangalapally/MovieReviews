/* eslint-disable func-names */
import {
  ADD_TO_FAVORITES,
  ADD_TO_BOOKMARKS,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_FAVORITES,
  REMOVE_FROM_BOOKMARKS,
  REMOVE_FROM_WATCHLIST,
} from '../actions/types';

const initialState = {
  textTitle: '',
  loading: false,
  favoritesMoviesList: [],
  bookmarkMoviesList: [],
  watchMoviesList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        text: 'Favorites',
        loading: false,
        favoritesMoviesList: action.payload,
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        text: 'Favorites',
        loading: false,
        favoritesMoviesList: action.payload,
      };
    case ADD_TO_BOOKMARKS:
      return {
        ...state,
        text: 'Bookmarks',
        loading: false,
        bookmarkMoviesList: action.payload,
      };
    case REMOVE_FROM_BOOKMARKS:
      return {
        ...state,
        text: 'Bookmarks',
        loading: false,
        bookmarkMoviesList: action.payload,
      };
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        text: 'Watchlist',
        loading: false,
        watchMoviesList: action.payload,
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        text: 'Watchlist',
        loading: false,
        watchMoviesList: action.payload,
      };
      // case LOADING:
      //     return {
      //         ...state,
      //         loading: true,
      //     }
    default:
      return state;
  }
}
