//combine all reducers in one reducer and set into single parent state
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    movies: searchReducer
});