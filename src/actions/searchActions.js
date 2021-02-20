import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from './types';
import axios from 'axios';
const API_KEY = '7107cc88cc38939ff1dc0ecdee74365c';

export const searchMovie = text => dispatch => {
    // dispatch is coming from the redux middleware
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
    // const request = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    // return {
    //     type: FETCH_POPULAR,
    //     payload: request
    // }
}
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=kl

export const fetchMovies = text => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}&language=en-US&page=1&include_adult=false`)
    .then(response => {

        console.log(response)
        return dispatch({
        type: FETCH_MOVIES,
        payload: response.data,
        loading: false
    })})
    .catch(error => console.log(error));
}
// export const fetchGenres = text => dispatch => {
//     axios.get(`https://api.themoviedb.org/3/genre/movie?api_key=${API_KEY}&language=en-US`)
//     .then(response => dispatch({
//         type: FETCH_GENRES,
//         payload: response.data.results,
//         loading: false
//     }))
//     .catch(error => console.log(error));
// }

export const fetchMovie = movie_id => dispatch => {
    console.log(movie_id)
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
    .then(response => {
        console.log(response)
        return dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
        loading: false
    })})
    .catch(error => console.log(error));
}

export const setLoading = () => {
    return {
        type: LOADING
    }
}