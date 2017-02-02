import React, { Component } from 'react';
import SignIn from "../../containers/signInContainer/SignInContainer";
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <div className='header'>

<<<<<<< HEAD
      <button
        className='logo-btn'
        onClick={() => props.filter('SHOW_ALL')}>
        <Link to='/'><span className='logo'>Ripe Tomatoes</span></Link>
=======
      <button>
        <Link to='/'>LOGO</Link>
>>>>>>> master
      </button>

      <SignIn />

      <Link to='/favorites'>
<<<<<<< HEAD
        <button
          className='show-fav-btn btn'
          id='set-filter-btn'
          onClick={() => props.filter('SHOW_FAVORITES')}>
          Favorites
=======
        <button>
          FAVORITES
>>>>>>> master
        </button>
      </Link>

      <Link to='/join'>
        <button>
          SIGN UP
        </button>
      </Link>


    </div>
  )
}

export default Header;
