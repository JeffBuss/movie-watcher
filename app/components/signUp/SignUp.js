import React from 'react';
import './signUp-style';

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
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render(){
    return(
      <div>
        <form id='sign-up-form'>
          <input placeholder='Name'
                 onChange={(e) => this.setState({ name: e.target.value })}/>

          <input placeholder='Email'
                 onChange={(e) => this.setState({ email: e.target.value })}/>

          <input placeholder='Password'
                 onChange={(e) => this.setState({ password: e.target.value })}/>

          <button onClick={(e) => {
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
