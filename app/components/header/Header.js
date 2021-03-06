import React, { Component } from 'react';
import SignIn from "../../containers/signInContainer/SignInContainer";
import { Link } from 'react-router'

const Header = (props) => {

  const signOutUser = () => {
    props.clearFavorites();
    props.signOutClick(null);
    localStorage.clear();
  }

  const display = () => {

    if(props.user){
      return(
      <div>
        <button
          className='sign-up-out-btns btn'
          onClick={() => signOutUser()}>
            Sign Out
        </button>
      </div>)
    } else if(props.pathname !== "/join") {
      return (
        <div>
          <Link to='/join'>
            <button
              className='sign-up-out-btns btn'>
                Sign Up
            </button>
          </Link>
        </div>)
    }
  }

  return (

    <div className='header'>
      <SignIn pathname={props.pathname}/>
        <Link to='/'>
          <span className='logo'>
             Ripe
             <img
               className='logo-img'
               src='../assets/tomato.svg' />
             Tomatoes
          </span>
        </Link>
        <div>{(display())}</div>
    </div>
  )
}

export default Header;
