import React, { Component } from 'react';
// import './movieCard-style';

const MovieCard = (props) => {

  const addFavToApi = () => {
    const {id, user, title, poster_path,
           release_date, vote_average, overview} = props;
    let favCheck = false;

    props.favorites.forEach(movie => {
      if(movie.title === props.title)
        return favCheck = true;
    })

    if(!favCheck){
      fetch('api/users/favorites/new', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          movie_id: id,
          user_id: user,
          title: title,
          poster_path: poster_path,
          release_date: release_date,
          vote_average: vote_average,
          overview: overview })
        })
        .then(() => props.addFav(props))
      } else {
        let favID = null;

        props.favorites.forEach(fav => {
          if(fav.title == props.title)
            favID = fav.movie_id || fav.id;
        })

        fetch(`api/users/${user}/favorites/${favID}`, {
          method: "DELETE",
          headers: {'Content-Type' : 'application/json'},
        })
          .then(() => props.removeFav(props))
          .catch(err => console.log(err))
      }
  }

  const favoriteBtn = () => {
    if(props.user) {
    return (
      <button
        className='add-fav-btn btn'
        id='fav'
        onClick={() => {
          addFavToApi();
        }}>
        FAV!
      </button>
    )}
  }

  return (
    <div className='movie-card'>
      {favoriteBtn()}
      {/* <h1 className='movie-title'>{props.title}</h1> */}
      {/* <p className='movie-release'>{props.release_date}</p> */}
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w342/${props.poster_path}`} />
    </div>
  );
};

export default MovieCard;
