import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/movieList/MovieList';

const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer,
    movies: state.movieListReducer,
    user: state.userReducer
  };
};

export default connect(mapStateToProps)(MovieList)
