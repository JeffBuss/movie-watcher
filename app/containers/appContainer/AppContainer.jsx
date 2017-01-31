import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTheaters } from '../../actions';
import App from '../../components/app/App';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (movies) => {
      dispatch(loadTheaters(movies))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.theatersReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
