import React, { Component } from 'react';
// import './movieCard-style';

const MovieCard = (props) => {
  const favoritesCheck = (props) => {
    let match = null;
    props.favorites.forEach(fav => {
      if(fav.title === props.title)
        match = fav.movie_id || fav.id;
    })
    return match;
  }

  const addFavToApi = (props) => {
    const {id, user, title, poster_path,
           release_date, vote_average,
           overview} = props;

    const favID = favoritesCheck(props);

    if(!favID){
      fetch('api/users/favorites/new', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          movie_id: id,
          user_id: user.id,
          title: title,
          poster_path: poster_path,
          release_date: release_date,
          vote_average: vote_average,
          overview: overview })
        })
        .then(() => props.addFav(props))
      } else {

        fetch(`api/users/${user.id}/favorites/${favID}`, {
          method: "DELETE",
          headers: {'Content-Type' : 'application/json'},
        })
          .then(() => props.removeFav(props))
          .catch(err => console.log(err))
      }
  }

  const favoriteBtn = (props) => {
    if(props.user) {
    return (
      <button id='fav'
        onClick={() => addFavToApi(props)}>
        FAV!
      </button>
    )}
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.release_date}</p>
      {favoriteBtn(props)}
    </div>
  );
};

export default MovieCard;
