import React, { Component } from 'react';
import './movieCard-style';

const MovieCard = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.release_date}</p>
      <button id='fav'
              onClick={() => {
                props.handleClick(props);
              }}>
        FAV!
      </button>
    </div>
  );
};

export default MovieCard;
