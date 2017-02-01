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

  const currentFilter = () => {
    switch(state.filterReducer) {
      case 'SHOW_FAVORITES':
        return state.favoritesReducer;
      default:
        return state.moviesReducer
    }
  }

  return {
    favorites: state.favoritesReducer,
    movies: currentFilter(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
