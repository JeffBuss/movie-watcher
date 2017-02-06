import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router';
import MovieCard from './MovieCard';
import MovieDetail from '../movieDetail/MovieDetail';
const fakeStore = configureMockStore()({ user: null })



const setup = () => {
  const props = {
    addFav: jest.fn(),
    removeFav: jest.fn(),
    favorites: [ { title: 'free willy' }],
    setCurrentMovie: jest.fn(),
    user: { name: 'test', email: 'test@test.com', password: '12345678' },
    movies: [ { title: 'free willy' }],
  }

  const history = createMemoryHistory()

  const wrapper = mount(
    <Provider store={fakeStore}>
      <Router history={history}>
        <Route path='/' component={MovieCard} />
        <Route path='/movies/:title' component={MovieDetail} />
      </Router>
      {/* <MovieCard {...props} /> */}
    </Provider>
  )

  const Component = wrapper.find(MovieCard)

  return {
    props,
    Component
  }
}

describe('MovieCard', () => {

  it('should render something', () => {
      const { Component } = setup()
      expect(Component.length).toEqual(1)
  })

  it('should render a movie card', () => {
      const { Component } = setup()
      expect(Component.find('.movie-card').length).toEqual(1)
  })

  it('should render a movie poster img', () => {
      const { Component } = setup()
      expect(Component.find('img').length).toEqual(1);
  })

  it.skip('should call setCurrentMovie if the img is clicked', () => {
    const { Component } = setup();
    const poster = Component.find('img')
    poster.simulate('click')
    expect(props.setCurrentMovie).toBeCalled();
  })


})
