import React, { Component } from 'react';
import './search-style'
// import SearchContainer from '../../containers/searchContainer/SearchContainer';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    }
  }

  render() {
    const { searchValue } = this.state
    return (
      <div className='search-input'>
        <input placeholder='Search Movies'
               onChange={(e) => this.setState({ searchValue: e.target.value })}/>
        <button className='button'>
          SEARCH
        </button>
      </div>
    )
  }
}
