import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/movieCard/MovieCard';

const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer,
    movies: state.movieListReducer,
    user: state.userReducer
  };
};

export default connect(mapStateToProps)(MovieCard)
