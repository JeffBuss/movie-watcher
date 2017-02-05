import React, { Component } from 'react';
import './movieList-style';
import MovieCard from '../../containers/movieContainer/MovieContainer';
import Search from '../search/Search';

const MovieList = (props) => {

  const noUser = <p className='fav-error'>Please sign in to view and add to your favorites.
                    <br/> Or sign up above!</p>;
  const noFavorites = <p>No favorites.</p>
  const path = props.router.location.pathname;

  const pathCheck = () => {
    switch (path) {
      case "/favorites":
        return !props.user ?
          noUser : props.favorites.length ?
              movies : noFavorites;
      default:
        return movies;
    }
  }

  const search = () => {
    if(path === '/') {
      return(
        <Search />
      )
    }
  }

  const movies = props.movies.map(obj => {
    return (
      <MovieCard key={obj.id} {...obj} />
    );
  });

  return (
    <div className='movie-list'>
        {search()}
        {pathCheck()}
    </div>
  );
};

export default MovieList;
