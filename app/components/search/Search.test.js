import React from 'react';
import { mount  } from 'enzyme';
import Search from './Search';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const fakeStore = configureMockStore()({})

const setup = (user = null) => {

  const props = {
    user: user,
    pathname: '/',
    clearFavorites: jest.fn(),
    signOutClick: jest.fn()
  }

  const wrapper = mount(
    <Provider store={fakeStore} >
      <Search {...props} />
    </Provider>
  )

  const Component = wrapper.find(Search)

  return {
    props,
    Component
  }
}

describe('components', () => {
  describe('Search', () => {

    it('should render something', () => {
      const { Component } = setup();
      expect(Component.length).toEqual(1)
    })

    it('should have a search and clear button', () => {
      const { Component } = setup();
      const search = Component.find('.search-btn');
      expect(search.length).toEqual(2)
    })

  })
})
