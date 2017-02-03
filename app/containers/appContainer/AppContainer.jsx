import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies, setFilter } from '../../actions';
import App from '../../components/app/App';

const mapDispatchToProps = (dispatch) => {
  // console.log('1')
  return {
    fetchMovies: (movies) => {
      dispatch(loadMovies(movies))
    },
  }
}

const mapStateToProps = (state) => {
  // console.log('4')
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
