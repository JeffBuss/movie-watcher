import React, { Component } from 'react';
// import './movieCard-style';

const MovieCard = (props) => {

  const addFavToApi = () => {
    const {id, user, title, poster_path, release_date, vote_average, overview} = props
    fetch('api/users/favorites/new', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        movie_id: id,
        user_id: user,
        title: title,
        poster_path: poster_path,
        release_date: release_date,
        vote_average: vote_average,
        overview: overview })
      })
      .then(() => props.handleClick(props))
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
