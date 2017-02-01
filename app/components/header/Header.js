import React, { Component } from 'react';
import SignIn from "../../containers/signInContainer/SignInContainer";
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <div>
      <SignIn />
      
      <button onClick={() => {
                props.filter('SHOW_ALL')
              }}>
        <Link to='/'>LOGO</Link>
      </button>

      <button id='set-filter-btn'
              onClick={() => {
                props.filter('SHOW_FAVORITES')
              }}>
        <Link to='movies/favorites'>FAVORITES</Link>
      </button>
    </div>
  )
}

export default Header;
