//combine all reducers in one reducer and set into single parent state
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

export default combineReducers({
    movies: searchReducer,
    moviesList: userReducer,
});
