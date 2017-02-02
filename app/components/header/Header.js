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

      {signUp()}


    </div>
  )
}

export default Header;
