import React, { Component } from 'react';
import { loadTheaters } from '../../actions';
import Header from '../header/Header';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('1.5')
    fetch('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=74e395a1a0373d4f389e8f007c86c5e7')
      .then(data => data.json())
      .then(data => this.props.fetchMovies(data.results))
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App
