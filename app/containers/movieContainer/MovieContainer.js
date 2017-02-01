import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../actions';
import MovieList from '../../components/movieList/MovieList';

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (movie) => {
      dispatch(addToFavorites(movie));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer,
    movies: currentFilter(state),
    user: state.userReducer
  };
};

const currentFilter = (state) => {
  switch(state.filterReducer) {
    case 'SHOW_FAVORITES':
    return state.favoritesReducer;
    default:
    return state.moviesReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
