/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

function Navbar() {
  return (
    <header>
      <nav className="top-nav">
        <div className="container">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12 m10 offset-m1">
                <h1 className="header">
                  <Link to="/">Watch More Movies</Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <Link to="/">
            <i className="material-icons">home</i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/search">
            <i className="material-icons">search</i>
            Search
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <i className="material-icons">favorite_border</i>
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/bookmark">
            <i className="material-icons">bookmark_border</i>
            Bookmark
          </Link>
        </li>
        <li>
          <Link to="/watchlater">
            <i className="material-icons">playlist_add</i>
            {' '}
            Watch Later
          </Link>
        </li>
        <li>
          <Link to="/whattowatch">
            <i className="material-icons">tv</i>
            {' '}
            What to Watch?
          </Link>
        </li>
      </ul>
      {/* <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}

    </header>
  );
}

export default Navbar;
