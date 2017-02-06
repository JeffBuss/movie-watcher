import moviesReducer from '../movieList-reducer';

describe('movies-Reducer', () => {

  it('should return default state of an empty array', () => {
    expect(moviesReducer(undefined, {})).toEqual([])
  })

  it('should return an array equal to the length of action.movies if LOAD_MOVIES is the action type', () => {
    const movies = [{ title: 'Free Willy' }, { title: 'Aladin' }]
    const action = {
      type: 'LOAD_MOVIES',
      movies
    }
    expect(moviesReducer(undefined, action)).toHaveLength(2)
  })

})
