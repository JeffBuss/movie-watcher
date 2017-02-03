import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFavorites } from '../../actions';
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
    user: state.userReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)
