import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "tman2272@aol.com",
      password: "password"
    }
  }



  signIn() {
    const { email, password } = this.state;

    fetch("/api/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(user => this.props.signInClick(user.data))
    .then(() => fetch(`/api/users/${this.props.user.id}/favorites`)
      .then(res => res.json())
      .then(favs => this.props.getFavorites(favs.data)))
    .catch(err => alert("Invalid Email/Password."))
  }

  userCheck(){
    const { user } = this.props;
    const { email, password } = this.state;

    if(user) {
      return <p className='welcome'>Welcome, {user.name}!</p>
    } else {
      return (
        <div>
          <input className="email input"
                 placeholder="Email"
                 value={email}
                 onChange={e => this.setState({email: e.target.value})}/>

          <input className="password input"
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={e => this.setState({password: e.target.value})}/>

          <button className="signin-btn btn"
                  onClick={() => this.signIn()}>
            Sign In
          </button>
        </div>
      )
    }
  }

  render(){
    return(
      <div className='signin'>
        {this.userCheck()}
      </div>
    )
  }
}

export default SignIn;
