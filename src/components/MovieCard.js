import React, { Component } from 'react'
import missingImg from './download.png'
import {Link} from 'react-router-dom';
export class MovieCard extends Component {
    render() {
        const movie = this.props;
        const movieInfo = movie.movie;
        console.log(movie)
        const index = this.props.key;
        return (
      <div className="col s6 center-align z-depth-5" key={index}>
        <div className="content ">
          <div className="img-content">
            <img className="poster" src={movieInfo.poster_path ? "https://image.tmdb.org/t/p/w500/"+movieInfo.poster_path : missingImg} alt={'Poster of ' + movieInfo.title} style={{    width: "255px", height: "370px"}}/>
          </div>
          <div className="info-content">
            <h5>{movieInfo.title}</h5>
            <p>{movieInfo.release_date}</p>
            {/* <Ratings index={index} id={details["id"]} get_rating={emptyRating} get_date={notReleasedYet}/>
            <i className="iconsChange small material-icons" onClick={this.addFav} onMouseOver={this.fav_over}
              onMouseOut={this.fav_out}>{fav}</i>
            <i className="iconsChange small material-icons" onClick={this.addWatch} onMouseOver={this.watch_over}
              onMouseOut={this.watch_out}>{watch}</i> */}
          </div>
          <Link className="waves-effect waves-light btn-small" style={{'margin-bottom': "5px"}} to={'/movie/'+movieInfo.id}>Details</Link>
        </div>
      </div>
        )
    }
}

export default MovieCard
