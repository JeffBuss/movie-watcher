import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../actions';
import Movie from '../../components/movie/Movie';

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (movie) => {
      dispatch(addToFavorites(movie))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
