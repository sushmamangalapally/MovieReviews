import React, { Component } from 'react'
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
export class MoviesContainer extends Component {
    render() {
        const { movies, text } = this.props;
        let content = '';
        console.log(movies)

        console.log(movies)
        const movieResults = (movies.movies.total_results) ? movies.movies.results : [];
        console.log(movieResults)
        content = (movies.movies.total_results) ? (movieResults.map((movie, index) => <MovieCard key={index} movie={movie} />)) : (movies.movies.page ? <p>Sorry, no results found!</p> : null);
        return (

            <div className="row">
                <div className="container">
                    <div className="row">
                    {content}
                    </div>
                </div> 
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movies: state.movies,
    text: state.movies.text
})
export default connect(mapStateToProps)(MoviesContainer);
