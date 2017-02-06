import favorites from '../favorites-reducer';

describe('favorites-Reducer', () => {

  it('should return default state of an empty array', () => {
    expect(favorites(undefined, {})).toEqual([])
  })

  it('should increase length with a new fav added if ADD_TO_FAVORITES is the type', () => {
    const movie = { title: 'Free Willy' }
    const action = {
      type: 'ADD_TO_FAVORITES',
      movie
    }
    expect(favorites(undefined, action)).toHaveLength(1)

    expect(favorites([{title: 'Aladin'}], action)).toHaveLength(2)
  })

  it('should  in length if REMOVE_FAVORITES is the action type', () => {
    const movie = { title: 'Free Willy'}
    const action = {
      type: 'REMOVE_FAVORITES',
      movie
    }
    expect(favorites([{ title: 'Free Willy'}] , action)).toHaveLength(0);

    expect(favorites([{ title: 'Aladin' }], action)).toHaveLength(1)

    expect(favorites([{ title: 'Aladin'}, { title: 'Free Willy'}], action)).toHaveLength(1)
  })

  it('should return an empty array if CLEAR_FAVORITES is the action type', () => {
    const action = {
      type: 'CLEAR_FAVORITES',
    }
    expect(favorites(undefined, action)).toEqual([]);

    expect(favorites([{ title: 'Free Willy'}], action)).toHaveLength(0)

    expect(favorites([{ title: 'Free Willy'}], action)).toEqual([])
  })


})
