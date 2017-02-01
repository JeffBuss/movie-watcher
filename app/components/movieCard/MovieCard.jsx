import React, { Component } from 'react';
// import './movieCard-style';

const MovieCard = (props) => {

  const favoriteBtn = () => {
    if(props.user) {
    return (
      <button id='fav'
        onClick={() => {
          props.handleClick(props);
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
