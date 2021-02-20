import React, { Component } from 'react';
import MovieList from './MovieList';
import Favorites from './Favorites';
import ToWatch from './ToWatch';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Refapp extends Component {
  constructor() {
    super();

    // getinitialState
    this.state = {
      favorites: [],
      newMovies: []
    };
  }
  render() {
    return (
      <div className="movie_listings">
        <Router>
            <div className="">
            <nav>
              <div className="nav-wrapper grey darken-3">
               <a href="#" className="brand-logo center">Watch More Films</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Favorites'}>Favorites</Link></li>
                    <li><Link to={'/ToWatch'}>Movies To Watch</Link></li>
                </ul>
              </div>
              </nav>
              <div className="moviesMain col s12 m12 container">
              <Route exact path='/' render={(props) => <MovieList fav={this.state.favorites} filmsToWatch={this.state.newMovies} isAuthed={true}/>}/>
              <Route exact path='/Favorites' render={(props) => <Favorites fav={this.state.favorites} isAuthed={true} />}/>
              <Route exact path='/ToWatch' render={(props) => <ToWatch filmsToWatch={this.state.newMovies} isAuthed={true} />}/>
              </div>
            </div>
         </Router>
      </div>
    );
  }
}

export default Refapp;
