import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFavorites } from '../../actions';
import MovieDetail from '../../components/movieDetail/MovieDetail';

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (movie) => {
      dispatch(addToFavorites(movie));
    },
    removeFav: (movie) => {
      dispatch(removeFavorites(movie))
    },
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer,
    movie: state.currentMovieReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
