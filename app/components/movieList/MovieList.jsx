import React, { Component } from 'react';
import './movieList-style';
import MovieCard from '../movieCard/MovieCard'


const MovieList = (props) => {
  const movies = props.movies.map(obj => {

    return (
      <MovieCard
        addFav={props.addFav}
        removeFav={props.removeFav}
        key={obj.id}
        user={props.user ? props.user.id : null}
        favorites={props.favorites}
        {...obj} />
    );
  });

  return (
    <div className='movie-list'>
      {movies}
    </div>
  );
};

export default MovieList;
