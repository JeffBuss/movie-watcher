import React from 'react';
import { mount  } from 'enzyme';
import Header from './Header';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const fakeStore = configureMockStore()({ })

const setup = (user = null) => {
  const props = {
    user: user,
    pathname: '/',
    clearFavorites: jest.fn(),
    signOutClick: jest.fn()
  }

  const wrapper = mount(
    <Provider store={fakeStore}>
      <Header {...props} />
    </Provider>
  )

  const Component = wrapper.find(Header)

  return {
    props,
    Component
  }
}

describe('components', () => {
  describe('Header', () => {

    it('should render something', () => {
        const { Component } = setup()
        expect(Component.length).toEqual(1)
    })

    it('should display sign up button if no user signed in', () => {
      const { Component } = setup();
      const signOut = Component.find('.sign-up-out-btns')
      expect(signOut.length).toEqual(1)
      expect(signOut.text()).toEqual('Sign Up')
    })

    it('should display a sign OUT button if a user is signed in', () => {
      const { Component } = setup({name: 'jeff'});
      const signOut = Component.find('.sign-up-out-btns')
      expect(signOut.length).toEqual(1)
      expect(signOut.text()).toEqual('Sign Out')
    })


  })
})
