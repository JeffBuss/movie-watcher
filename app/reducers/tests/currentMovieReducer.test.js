import currentMovie from '../currentMovie-Reducer';

describe('currentMovie-Reducer', () => {

  it('should return default state of an empty string', () => {
    expect(currentMovie(undefined, {})).toEqual('')
  })

  it('should return a movie object if type is SET_CURRENT', () => {
    const movie = { title: 'Free Willy'}
    const action = {
      type: 'SET_CURRENT',
      movie
    }
    expect(currentMovie(undefined, action)).toEqual(movie)
  })

})
