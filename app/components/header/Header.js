import React, { Component } from 'react';
import SignIn from "../../containers/signInContainer/SignInContainer";
import { Link } from 'react-router'

const Header = (props) => {
  
  const signOutUser = () => {
    localStorage.clear();
    props.clearFavorites();
    props.signOutClick(null);
  }

<<<<<<< HEAD
  const signUp = () => {
    if(!props.user){
      return (
        <Link to='/join'>
        <button className='sign-up-out-btns btn'>
          Sign Up
        </button>
      </Link>
      )
    } else {
      return (
        <button className='sign-up-out-btns btn'>
          Sign Out
        </button>
      )
=======
  const display = () => {
    if(props.user){
      return(<div>
        <Link to='/favorites'><button>FAVORITES</button></Link>
        <button onClick={() => signOutUser()}>Sign Out</button>
      </div>)
    } else if(props.pathname !== "/join") {
      return (
        <div>
          <Link to='/favorites'><button>FAVORITES</button></Link>
          <Link to='/join'><button>SIGN UP</button></Link>
        </div>)
>>>>>>> master
    }
  }

  return (
<<<<<<< HEAD
    <div className='header'>
    <Link to='/'>
    <span className='logo'>
       Ripe 
       <img
         className='logo-img'
         src='../assets/tomato.svg' />
       Tomatoes
    </span>
    </Link>
      <SignIn />
      <Link to='/favorites'>
        <button
          className='show-fav-btn btn'
          id='set-filter-btn'>
          Favorites
        </button>
      </Link>
      {signUp()}
=======
    <div>
      <SignIn pathname={props.pathname}/>
      <button>
        <Link to='/'>LOGO</Link>
      </button>
      {(display())}
>>>>>>> master
    </div>
  )
}

export default Header;
