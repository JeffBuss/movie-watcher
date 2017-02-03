import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies, signInUser, addToFavorites, clearFavorites } from '../../actions';
import App from '../../components/app/App';

const mapDispatchToProps = (dispatch) => {
  // console.log('1')
  return {
    fetchMovies: (movies) => {
      dispatch(loadMovies(movies))
    },
    getUser: (user) => {
      dispatch(signInUser(user))
    },

    getFavorites: (favs) => {
      favs.forEach(fav => dispatch(addToFavorites(fav)))
    },

    resetFavorites: (movies) => {
      dispatch(clearFavorites(movies))
    }
  }
}

//fix favorites on refresh, reset favorites on signout

const mapStateToProps = (state) => {
  // console.log('4')
  return {
    user: state.userReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
