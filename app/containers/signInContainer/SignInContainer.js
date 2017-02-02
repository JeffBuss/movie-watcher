import React from 'react';
import { connect } from 'react-redux';
import { signInUser, addToFavorites } from '../../actions';
import SignIn from '../../components/signIn/SignIn';

const mapDispatchToProps = (dispatch) => {
  return {
    signInClick: (user) => {
      dispatch(signInUser(user));
    },
    getFavorites: (favs) => {
      favs.forEach(fav => dispatch(addToFavorites(fav)))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
