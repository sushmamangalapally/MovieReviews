import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav className="top-nav">
            <div className="container">
            <div className="nav-wrapper">
                <div className="row">
                <div className="col s12 m10 offset-m1">
                    <h4 className="header"><Link to="/">Watch More Movies</Link></h4>
                </div>
                </div>
            </div>
            </div>
        </nav>
                <ul id="slide-out" className="sidenav sidenav-fixed">
      <li><a href="#!">First Sidebar Link</a></li>
      <li><a href="#!">Second Sidebar Link</a></li>
    </ul>

        </header>
    )
}

export default Navbar
