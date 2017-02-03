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
      error: ''
    }
  }

  addNewUser() {
  const { name, email, password } = this.state
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
  .catch(err => this.setState({ error: 'EXISTING_USER' }))
  }

  emailExistsError(err) {
    switch(err) {
      case 'EXISTING_USER':
        return(
          <p className='submit-error'>Email already exists, please try again with a different email address</p>
        );
      case 'INVALID_EMAIL':
        return (
          <p className='submit-error'>Please enter a valid email address</p>
        )
    }
  }

  testEmail() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(this.state.email)) {
      return true;
    } else { return false }
  }


  render(){
    const { name, email, password } = this.state
    return(
      <div>
        <form
          id='sign-up-form'
          className='sign-up-field'
          >
          <input placeholder='Name'
                 value={name}
                 onChange={(e) => this.setState({ name: e.target.value })}
                 className='signup-name input'/>
                 <br/>
          <input placeholder='Email'
                 value={email}
                 onChange={(e) => this.setState({ email: e.target.value })}
                 className='signup-email input'/>
          {this.emailExistsError(this.state.error)}
                  <br/>
          <input placeholder='Password'
                 value={password}
                 onChange={(e) => this.setState({ password: e.target.value })}
                 className='signup-password input'/>
                <br/>
          <button className='btn'
                  disabled={!this.state.email || !this.state.name || !this.state.password}
                  onClick={(e) => {
                    e.preventDefault();
                    if(!email || !this.testEmail()) {
                      this.setState({ error: 'INVALID_EMAIL' })
                    } else {
                      this.testEmail()
                      this.addNewUser();
                    }
                  }}>
            JOIN!
          </button>
        </form>
      </div>
    )
  }
}

export default SignUp;
