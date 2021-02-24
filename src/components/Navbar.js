import React from "react";
import { Link } from "react-router-dom";
import '../css/App.css';

function Navbar() {
    return (
        <header>
            <nav className="top-nav">
                <div className="container">
                    <div className="nav-wrapper">
                        <div className="row">
                            <div className="col s12 m10 offset-m1">
                                <h4 className="header">
                                    <Link to="/">Watch More Movies</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                    <Link to="/">
                        <i class="material-icons">home</i>Home
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        <i class="material-icons">search</i>Search
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        <i class="material-icons">favorite_border</i>Favorites
                    </Link>
                </li>
                <li>
                    <Link to="/bookmark">
                        <i class="material-icons">bookmark_border</i>Bookmark
                    </Link>
                </li>
                <li>
                    <Link to="/watchlater">
                        <i class="material-icons">playlist_add</i> Watch Later
                    </Link>
                </li>
                <li>
                    <Link to="/whattowatch">
                        <i class="material-icons">tv</i> What to Watch?
                    </Link>
                </li>
            </ul>
            {/* <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}

        </header>
    );
}

export default Navbar;
