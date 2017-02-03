import React, { Component } from 'react';
import SignIn from "../../containers/signInContainer/SignInContainer";
import { Link } from 'react-router'

const Header = (props) => {

  const signOutUser = () => {
    localStorage.clear();
    props.clearFavorites();
    props.signOutClick(null);
  }

  const display = () => {
    if(props.user){
      return(
      <div>
        <Link to='/favorites'>
          <button
            className='show-fav-btn btn'>
              Favorites
          </button>
        </Link>
        <button
          className='sign-up-out-btns btn'
          onClick={() => signOutUser()}>
            Sign Out
        </button>
      </div>)
    } else if(props.pathname !== "/join") {
      return (
        <div>
          <Link to='/favorites'>
            <button
              className='show-fav-btn btn'>
                Favorites
            </button>
          </Link>
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
      {(display())}
    </div>
  )
}

export default Header;
