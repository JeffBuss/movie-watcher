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
    </div>
  )
}

export default Header;
