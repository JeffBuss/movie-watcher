export const addToFavorites = (movie) => {
  return {
    type: 'ADD_TO_FAVORITES',
    movie
  }
}

export const loadTheaters = (movies) => {
  // console.log('2')
  return {
    type: 'LOAD_THEATERS',
    movies
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}
