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
    }
  }

  return (
    <div>
      <SignIn pathname={props.pathname}/>
      <button>
        <Link to='/'>LOGO</Link>
      </button>
      {(display())}
    </div>
  )
}

export default Header;
