import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import FavoritesContainer from './FavoritesContainer';

const fakeStore = configureMockStore()({ user: null })

const setup = () => {
  const props = {
    addFav: jest.fn(),
    removeFav: jest.fn(),
    setCurrentMovie: jest.fn()
  }

  const wrapper = mount(
    // if you were to test your Provider or Container components you'd need the following
    <Provider store={fakeStore}>
      <FavoritesContainer {...props} />
    </Provider>

    /* <FavoritesContainer {...props} />  */
  )

  const Component = wrapper.find(FavoritesContainer)
  //can't we just pass wrapper below?


  return {
    props,
    Component
  }
}

describe('components', () => {
  describe('FavoritesContainer', () => {

    it.only('should render something', () => {
        const { Component } = setup()
        // expect(Component.find().length).toEqual(1)
        expect(Component.length).toEqual(1)
      })

    // it('should call addTodo when Add Todo button is clicked', () => {
    //   const { props, Component } = setup()
    //
    //   let form = Component.find('form')
    //
    //   form.simulate('submit')
    //   // console.log(props);
    //   expect(props.handleSubmit).toBeCalled()
    //
    // // Or to verify how many times a function has been called
    //   expect(props.handleSubmit.mock.calls.length).toBe(1)
    // })
  })
})
