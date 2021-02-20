import React, { Component } from 'react'
import {connect} from 'react-redux';
import {searchMovie, fetchMovies, setLoading} from '../actions/searchActions'
export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }
    render() {
        return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h5 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h5>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>

        )
    }
}
const mapStatesToProps = state => ({
    text: state.movies.text
})
export default connect(mapStatesToProps, {searchMovie, fetchMovies, setLoading})(SearchForm);
