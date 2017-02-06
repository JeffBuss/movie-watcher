import * as actions from './index';

describe('actions', () => {

  it('should create an action to load movies', () => {
    const movies = [{title: 'free willy'}, {title: 'aladin'}];
    const expectedReturn = {
      type: 'LOAD_MOVIES',
      movies
    }
    expect(actions.loadMovies(movies)).toEqual(expectedReturn)
  })

  it('should create an action to add to favs', () => {
    const movie = {title: 'free willy'}
    const addFavResponse = {
      type: 'ADD_TO_FAVORITES',
      movie
    }
    expect(actions.addToFavorites(movie)).toEqual(addFavResponse);
  })

  it('should should create an action to sign in a user', () => {
    const user = { name: 'chuck norris', email: 'test@test.com', password: 'password' }
    const signInResponse = {
      type: 'SIGN_IN_USER',
      user
    }
    expect(actions.signInUser(user)).toEqual(signInResponse);
  })

  it('should create an action to remove a fav', () => {
    const movie = {title: 'free willy'};
    const removeFavResponse = {
      type: 'REMOVE_FAVORITES',
      movie
    }
    expect(actions.removeFavorites(movie)).toEqual(removeFavResponse)
  })

  it('should create an action to clear all favs', () => {
    const clearResponse = {
      type: 'CLEAR_FAVORITES'
    }
    expect(actions.clearFavorites()).toEqual(clearResponse);
  })

  it('should create an action to set the current movie', () => {
    const movie = {title: 'free willy'}
    const setCurrentResponse = {
      type: 'SET_CURRENT',
      movie
    }
    expect(actions.setCurrentMovie(movie)).toEqual(setCurrentResponse);
  })




})
