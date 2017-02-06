import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router';
import MovieList from './MovieList';

const fakeStore = configureMockStore()({ user: {name: 'Limbo'} })
const setup = () => {
  const props = {

  }

  const history = createMemoryHistory()

  const wrapper = mount(
    <Provider store={fakeStore}>
      <MovieList  />
    </Provider>
  )

  const Component = wrapper.find(MovieList)

  return {
    props,
    Component
  }
}

describe('MovieList', () => {

  it.skip('should render something', () => {
      const { Component } = setup()
      expect(Component.length).toEqual(1)
  })

})
