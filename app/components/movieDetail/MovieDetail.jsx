import React, { Component } from 'react';
import { Link } from 'react-router';
import MovieDetailContainer from '../../containers/movieDetailContainer/MovieDetailContainer';
// import './movieCard-style';

const MovieDetail = (props) => {
  const {id, user, title, poster_path,
         release_date, vote_average,
         overview} = props.movie;

console.log(props);
  const { movie } = props

  const getMatchedFavID = () => {
    let match = null;
    props.favorites.forEach(fav => {
      if(fav.title === props.movie.title)
        match = fav.movie_id || fav.id;
    })
    return match;
  }

  const addFavToApi = () => {

    const favID = getMatchedFavID(props);

    if(!favID){
      fetch('http://localhost:3000/api/users/favorites/new', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          movie_id: id,
          user_id: props.user.id,
          title: title,
          poster_path: poster_path,
          release_date: release_date,
          vote_average: vote_average,
          overview: overview })
        })
        .then(() => props.addFav(movie))
      } else {

        fetch(`http://localhost:3000/api/users/${user.id}/favorites/${favID}`, {
          method: "DELETE",
          headers: {'Content-Type' : 'application/json'},
        })
          .then(() => props.removeFav(movie))
          .catch(err => console.log(err))
      }
  }

  const favCheck = () => {
    let favorited = "";
    props.favorites.forEach(fav => {
      if(fav.title === title)
        favorited = "favorite"
    })
    return favorited;
  }

  const favoriteBtn = (movie) => {
    if(props.user) {
    return (
      <button className={"fav " + favCheck()}
        onClick={() => addFavToApi(movie)}>
      </button>
    )}
  }

  return (
    <div className='movie-detail-card'>
      <div className='movie-detail-info'>
        <h1 className='movie-title'>{title}</h1>
          <br/>
        <p className='movie-release'>{release_date}</p>
          <br/>
        <p className='movie-overview'>{overview}</p>
          <br/>
      </div>
        <img className='movie-detail-poster'
             src={`https://image.tmdb.org/t/p/w342/${poster_path}`}>
        </img>
        <div className='movie-detail-fav'>{favoriteBtn(movie)}</div>
    </div>
  );
};

export default MovieDetailContainer(MovieDetail);
