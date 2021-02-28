/* eslint-disable no-case-declarations */
/* eslint-disable func-names */
import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
  FETCH_POPULAR_MOVIES,
  FETCH_RANDOM_MOVIES,
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: [],
  popularMovies: [],
  randomMovies: [],
  noMovies: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        movies: [],
        loading: false,
      };
    case FETCH_MOVIES:
      // eslint-disable-next-line no-unused-vars
      const seMovies = action.payload;
      //   const { getMovies: movies } = state;
      const getMovies = state.movies;
      console.log(getMovies);
      console.log(seMovies);
      return {
        ...state,
        movies: [...getMovies, ...seMovies],
        noMovies: (seMovies.length === 0 && getMovies.length === 0),
        loading: false,
      };
    //   return {
    //     ...state,
    //     movies: action.payload,
    //     loading: false,
    //   };
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
      const popMovies = action.payload;
      //   const { rain: movies } = state;
      const rain = state.movies;
      const prePopularMov = state.popularMovies;
      /*
    const newPokemonList = action.payload.data.results;
    const { pokemonList } = state;
        return {
        ...state,
        pokemonList: [...pokemonList, ...newPokemonList],
        isLoading: false,
      };
      */
      return {
        ...state,
        movies: [...rain, ...popMovies],
        popularMovies: [...prePopularMov, ...popMovies],
        loading: false,
      };
    case FETCH_RANDOM_MOVIES:
      return {
        ...state,
        randomMovies: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
