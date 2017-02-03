import React, { Component } from 'react';
import './search-style'
import SearchContainer from '../../containers/searchContainer/SearchContainer';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  getResults() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=74e395a1a0373d4f389e8f007c86c5e7&query=${this.state.searchValue}`)
      .then(data => data.json())
      .then(data => this.props.loadResults(data.results))
  }

  render() {
    const { searchValue } = this.state
    return (
      <div className='search-input'>
        <input placeholder='Search Movies'
               onChange={(e) => this.setState({ searchValue: e.target.value })}/>
        <button className='button'
                onClick={() => this.getResults()}>
          SEARCH
        </button>
      </div>
    )
  }
}

export default SearchContainer(Search);
