import React from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../actions';
import SignIn from '../../components/signIn/SignIn';

const mapDispatchToProps = (dispatch) => {
  return {
    signInClick: (user) => {
      dispatch(signInUser(user));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
