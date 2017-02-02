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
      <button id='fav'
        onClick={() => {
          addFavToApi();
        }}>
        FAV!
      </button>
    )}
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.release_date}</p>
      {favoriteBtn()}
    </div>
  );
};

export default MovieCard;
