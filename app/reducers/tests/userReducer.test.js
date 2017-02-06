import userReducer from '../user-reducer';

describe('user reducer', () => {
  it('should default to a state of null', () => {
    expect(userReducer(undefined, {})).toEqual(null)
  })

  it('should return a user object if SIGN_IN_USER is the action type', () => {

    const user = { name: 'Chuck', email: 'test@test.com', password: 'password' }

    const action = {
      type: 'SIGN_IN_USER',
      user
    }

    expect(userReducer(undefined, action)).toEqual(user)
  })


})
