import React, { Component } from 'react';
import SignIn from "../../containers/signInContainer/SignInContainer";
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <div>
      <SignIn />

      <button onClick={() => props.filter('SHOW_ALL')}>
        <Link to='/'>LOGO</Link>
      </button>

      <Link to='/favorites'>
        <button id='set-filter-btn'
                onClick={() => props.filter('SHOW_FAVORITES')}>
          FAVORITES
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
