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
    movies: state.favoritesReducer,
    user: state.userReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
