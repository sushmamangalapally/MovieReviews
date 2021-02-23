import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import MoviesContainer from "./MoviesContainer";
import Spinner from "./Spinner";
import { fetchPopularMovies, setLoading } from "../actions/searchActions";
import MovieCard from "./MovieCard";
export class SearchMovie extends Component {
    render() {
        const { movies, text } = this.props;
        let content = "";

        console.log(movies);
        content =
            movies && movies.length > 0 ? (
                movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))
            ) : text.length ? (
                <p>Sorry, no results found!</p>
            ) : null;
        return (
            <div className="section">
                <div className="container">
                    <SearchForm />
                    {/* <Spinner/>
                    <MoviesContainer/> */}
                    {/* {loading ? <Spinner/> : <MoviesContainer/>} */}
                    <div className="row">
                        <div className="container">
                            <div className="row">{content}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
    text: state.movies.text,
    loading: state.movies.loading,
});
export default connect(mapStateToProps)(SearchMovie);
