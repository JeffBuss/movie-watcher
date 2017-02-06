import React from 'react';
import { mount  } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const fakeStore = configureMockStore()({ user: null })

const setup = () => {
  const props = {
    fetchMovies: jest.fn(),
    getUser: jest.fn(),
    getFavorites: jest.fn(),
    resetFavorites: jest.fn()
  }

  const wrapper = mount(
    <Provider store={fakeStore}>
      <App {...props} />
    </Provider>
  )

  const Component = wrapper.find(App)

  return {
    props,
    Component
  }
}

describe('components', () => {
  describe('App', () => {

    it.skip('should render something', () => {
        const { Component } = setup()
        expect(Component.length).toEqual(1)
      })

  })
})
