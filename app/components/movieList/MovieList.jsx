import React, { Component } from 'react';
import './movieList-style';
import MovieCard from '../movieCard/MovieCard';

const MovieList = (props) => {

  const noUser = <p>Please sign in to view and add to your favorites. <br/> Or sign up here!</p>;
  const noFavorites = <p>No favorites.</p>
  const path = props.router.location.pathname;

  const pathCheck = () => {
    switch (path) {
      case "/favorites":
        return !props.user ? noUser :
            props.favorites.length ? movies : noFavorites;
      default:
        return movies;
    }
  }

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
<<<<<<< HEAD
    <div className='movie-list'>
      {movies}
=======
    <div>
        {pathCheck()}
>>>>>>> master
    </div>
  );
};

export default MovieList;
