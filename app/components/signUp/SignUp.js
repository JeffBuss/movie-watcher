import React from 'react';
import './signUp-style';
import { browserHistory } from 'react-router';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: false
    }
  }

  addNewUser() {
  let { name, email, password } = this.state
  fetch('/api/users/new', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify({ name, email, password })
  })
  .then(() =>
  fetch("/api/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password})
  })
  .then(res => res.json())
  .then(user => {
    this.props.signInClick(user.data);
    if(user) {browserHistory.push('/')}
  }))
  .catch(err => this.setState({ error: true }))
  }

  displayError(err) {
    if(err) {
      return(
        <p className='existing-user-error'>{this.state.email} already exists, please try again with a different email address</p>
      )
    }
  }

  render(){
    return(
      <div>
        <form id='sign-up-form'>
          <input placeholder='Name'
                 onChange={(e) => this.setState({ name: e.target.value })}
                 className='name-input'/>

          <input placeholder='Email'
                 onChange={(e) => this.setState({ email: e.target.value })}
                 className='email input'/>

          {this.displayError(this.state.error)}

          <input placeholder='Password'
                 onChange={(e) => this.setState({ password: e.target.value })}
                 className='email input'/>

          <button className='btn' onClick={(e) => {
            e.preventDefault();
            this.addNewUser()
            }}>
            JOIN!
          </button>
        </form>
      </div>
    )
  }
}

export default SignUp;
