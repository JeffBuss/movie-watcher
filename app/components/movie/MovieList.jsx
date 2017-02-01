import React, { Component } from 'react';
import './movie-style';

const MovieList = (props) => {
  let movie = { title: 'Cool Runnings', rating: 'PG', release: '1991'}


  return (
    <div>
      <button id='fav'
              onClick={() => {
                props.handleClick(movie)
              }}>
        FAV!
      </button>
    </div>
  )
}

export default MovieList;
