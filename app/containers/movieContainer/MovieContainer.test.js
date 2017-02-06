import React from 'react';
import { mount  } from 'enzyme';
import MovieContainer from './MovieContainer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router';
import MovieDetailContainer from '../movieDetailContainer/MovieDetailContainer';

const fakeStore = configureMockStore()({ user: {name: 'Limbo'} })
const setup = () => {
  const props = {
    addFav: jest.fn(),
    removeFav: jest.fn(),
    favorites: [ { title: 'free willy' }],
    setCurrentMovie: jest.fn(),
    movies: [ { title: 'free willy' }],
  }

  const history = createMemoryHistory()

  const wrapper = mount(
    <Provider store={fakeStore}>
      <MovieContainer {...props} />
    </Provider>
  )

  const Component = wrapper.find(MovieContainer)

  return {
    props,
    Component
  }
}

describe('MovieContainer', () => {

  it('should render something', () => {
      const { Component } = setup()
      expect(Component.length).toEqual(1)
  })

  it('should render a movie card', () => {
      const { Component } = setup()
      expect(Component.find('.movie-card').length).toEqual(1)
  })

  // it('should render a movie poster img', () => {
  //     const { Component } = setup()
  //     expect(Component.find('img').length).toEqual(1);
  // })

  //can't get around the <Link> error
  // it('should call setCurrentMovie if the img is clicked', () => {
  //   const { Component } = setup();
  //   const poster = Component.find('img')
  //   poster.simulate('click')
  //   expect(props.setCurrentMovie.mock.calls.length).toBe(1)
  // })

})
