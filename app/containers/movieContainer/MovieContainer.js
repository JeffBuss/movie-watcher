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
    movies: state.theatersReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)