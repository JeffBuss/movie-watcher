import React, { Component } from 'react';
import { loadTheaters } from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=74e395a1a0373d4f389e8f007c86c5e7')
      .then(data => data.json())
      .then(data => this.props.fetchMovies(data.results))
  }

  render() {
    console.log(this)
    return (
      <div>
        <h1>Movie Watcherz</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App
