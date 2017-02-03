import React from 'react';
import './signUp-style';
import { browserHistory } from 'react-router';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
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
  }))
  .catch(err => alert("Email already in use."))
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

          <input placeholder='Password'
                 onChange={(e) => this.setState({ password: e.target.value })}
                 className='email input'/>

          <button className='btn' onClick={(e) => {
            e.preventDefault();
            this.addNewUser();
            browserHistory.push('/')}}>
            JOIN!
          </button>
        </form>
      </div>
    )
  }
}

export default SignUp;
