import React from 'react';
import { mount  } from 'enzyme';
import AppContainer from './AppContainer';
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
    // if you were to test your Provider or Container components you'd need the following
    <Provider store={fakeStore}>
      <AppContainer {...props} />
    </Provider>

    /* <AppContainer {...props} />  */
  )

  const Component = wrapper.find(AppContainer)
  //can't we just pass wrapper below?


  return {
    props,
    Component
  }
}

describe('components', () => {
  describe('AppContainer', () => {

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
