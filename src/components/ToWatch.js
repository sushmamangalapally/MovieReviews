import React from 'react';
import '../css/App.css';
class ToWatch extends React.Component {
    render() {
        return (
            <div className="mainWatch">
                <div className="movie_watch">
                    <h3>Movies To Watch</h3>
                </div>
            <div className="MainTiles row">
                    {this.props.filmsToWatch.map((index) => (
                        <div className="grid-example a_movie col s8 m3 center-align" key={"see"+index["id"]}>
                            <img className="poster" src={"https://image.tmdb.org/t/p/w500/"+index["poster_path"]} alt={index["title"]}/>
                            <h3>{index["title"]}</h3>
                        </div>             
                    ))}
                </div> 
            </div>
        )
    }
}

export default ToWatch;


