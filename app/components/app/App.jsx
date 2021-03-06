import React, { Component } from 'react';
import Header from '../header/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if(localStorage.length) {
      const user = JSON.parse(localStorage.getItem('user'))
      this.props.getUser(user)
    }
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=74e395a1a0373d4f389e8f007c86c5e7&language=en-US')
      .then(data => data.json())
      .then(data => this.props.fetchMovies(data.results))
      .then(() => {
        if(this.props.user){
          fetch(`/api/users/${this.props.user.id}/favorites`)
          .then(res => res.json())
          .then(favs => this.props.getFavorites(favs.data))
        }
      })

  }

  render() {
    return (
      <div>
        <Header user={this.props.user}
                pathname={this.props.location.pathname}
                clearFavorites={this.props.resetFavorites}
                signOutClick={this.props.getUser}/>
        {this.props.children}
      </div>
    )
  }
}

export default App
