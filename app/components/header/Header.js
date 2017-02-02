import React, { Component } from 'react';
import SignIn from "../../containers/signInContainer/SignInContainer";
import { Link } from 'react-router'

const Header = (props) => {
  console.log(props);

  const signUp = () => {
    if(!props.user){
      return (
        <Link to='/join'>
        <button>
          SIGN UP
        </button>
      </Link>
      )
    } else {
      return (
        <button>Sign Out</button>
      )
    }

  }

  return (
    <div className='header'>
      <button
        className='logo-btn'>
        <Link to='/'><span className='logo'>Ripe Tomatoes</span></Link>
      </button>

      <SignIn />

      <Link to='/favorites'>
        <button
          className='show-fav-btn btn'
          id='set-filter-btn'>
          Favorites
        </button>
      </Link>
      {signUp()}
    </div>
  )
}

export default Header;
