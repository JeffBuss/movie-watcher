import React, { Component } from 'react';
import SignIn from "../../containers/signInContainer/SignInContainer";
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <div>
      <SignIn />

      <button>
        <Link to='/'>LOGO</Link>
      </button>

      <Link to='/favorites'>
        <button>
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
