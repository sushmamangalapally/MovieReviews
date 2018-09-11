import React from 'react';
import '../css/App.css';

class Favorites extends React.Component {
  render() {
    return (
      <div className="mainFavorites">
        <div className="movie_fav">
          <h3>Recent Favorite Movies</h3>
        </div>
        <div className="row">
          {this.props.fav.map((index) => (
            <div className="grid-example a_movie col s8 m3 center-align z-depth-5" key={"fav"+index["id"]}>
              <div className="img-content">
                <img className="poster" src={"https://image.tmdb.org/t/p/w500/"+index["poster_path"]} alt={index["title"]}/>
              </div>
              <div className="info-content">
                <h3>{index["title"]}</h3>
              </div>
            </div>             
          ))}
        </div>
      </div>
    )
  }
}

export default Favorites;


