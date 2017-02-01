import React, { Component } from 'react';
// import { signIn } from '../../../src/queries';

const Header = (props) => {
  return (
    <div>
      <button onClick={() => {
                console.log('signIn')
              }}>
        SIGN IN
      </button>
      <button id='set-filter-btn'
              onClick={() => {
                props.showFavorites('SHOW_FAVORITES')
              }}>
        FAVORITES
      </button>
    </div>
  )
}

export default Header;
