import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFavorites, setCurrentMovie } from '../../actions';
import MovieCard from '../../components/movieCard/MovieCard';

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (movie) => {
      dispatch(addToFavorites(movie));
    },
    removeFav: (movie) => {
      dispatch(removeFavorites(movie))
    },
    setCurrentMovie: (movie) => {
      dispatch(setCurrentMovie(movie))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer,
    movies: state.movieListReducer,
    user: state.userReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
