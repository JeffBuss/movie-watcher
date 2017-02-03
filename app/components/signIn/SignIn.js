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
    .then(user => {
      this.props.signInClick(user.data)
      this.props.addToLocalStorage(user.data)
    })

    .then(() => fetch(`/api/users/${this.props.user.id}/favorites`)
      .then(res => res.json())
      .then(favs => this.props.getFavorites(favs.data)))
    .catch(err => alert("Invalid Email/Password."))
  }

  userCheck(){
    const { user } = this.props;
    const { email, password } = this.state;
    if(this.props.pathname !== "/join"){
      if(user) {
        return <p>Welcome, {user.name}!</p>
      } else {
        return (
          <div>
            <input className="email"
              placeholder="Email"
              value={email}
              onChange={e => this.setState({email: e.target.value})}/>

<<<<<<< HEAD
    if(user) {
      return <p className='welcome'>Welcome back, {user.name}!</p>
    } else {
      return (
        <div>
          <input className="email input"
                 placeholder="Email"
                 value={email}
                 onChange={e => this.setState({email: e.target.value})}/>
=======
            <input className="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => this.setState({password: e.target.value})}/>
>>>>>>> master

            <button className="signin-btn"
              onClick={() => this.signIn()}>
              Sign In
            </button>
          </div>
        )
      }

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
