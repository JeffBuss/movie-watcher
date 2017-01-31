export const addToFavorites = (movie) => {
  return {
    type: 'ADD_TO_FAVORITES',
    movie
  }
}

export const loadTheaters = (movies) => {
  return {
    type: 'LOAD_THEATERS',
    movies
  }
}
