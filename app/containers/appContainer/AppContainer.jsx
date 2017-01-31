import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTheaters } from '../../actions';
import App from '../../components/app/App';

const mapDispatchToProps = (dispatch) => {
  // console.log('1')
  return {
    fetchMovies: (movies) => {
      dispatch(loadTheaters(movies))
    }
  }
}

const mapStateToProps = (state) => {
  // console.log('4')
  return {
    movies: state.theatersReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
