import React, { Component } from 'react';
import { Link } from 'react-router'
// import { signIn } from '../../../src/queries';

const Header = (props) => {
  return (
    <div>
      <button onClick={() => {
                props.filter('SHOW_ALL')
              }}>
        <Link to='/'>LOGO</Link>
      </button>
      <button onClick={() => {
                console.log('signIn')
              }}>
        SIGN IN
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
