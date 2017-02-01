import React, { Component } from 'react';
import './movieList-style';
import MovieCard from '../movieCard/MovieCard'


const MovieList = (props) => {
  // console.log(props.movies);
  const movies = props.movies.map(obj => {
    return (
      <MovieCard
        key={obj.id}
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
