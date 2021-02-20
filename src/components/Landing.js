import React, { Component } from 'react'
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import MoviesContainer from './MoviesContainer'
import Spinner from './Spinner'

export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="section">
                <div className="container">
                <SearchForm/>
                 {/* <Spinner/>
                 <MoviesContainer/> */}
                {loading ? <Spinner/> : <MoviesContainer/>}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.movies.loading
})
export default connect(mapStateToProps)(Landing);
