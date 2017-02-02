import React, { Component } from 'react';
import './movieList-style';
import MovieCard from '../movieCard/MovieCard'


const MovieList = (props) => {
  const movies = props.movies.map(obj => {

    return (
      <MovieCard
        handleClick={props.handleClick}
        key={obj.id}
        user={props.user ? props.user.id : null}
        favorites={props.favorites}
        {...obj} />
    );
  });

  return (
    <div>
      {movies}
    </div>
  );
};

export default MovieList;
