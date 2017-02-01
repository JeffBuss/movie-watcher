import React, { Component } from 'react';
import './movieList-style';
import MovieCard from '../movieCard/MovieCard'


const MovieList = (props) => {
  // console.log(props.movies);
  const movies = props.movies.map(obj => {
    return (
      <MovieCard
        handleClick={props.handleClick}
        key={obj.id}
        user={props.user}
        {...obj}
      />
    );
  });

  return (
    <div>
      {movies}
    </div>
  );
};

export default MovieList;
