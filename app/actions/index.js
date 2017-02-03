export const addToFavorites = (movie) => {
  return {
    type: 'ADD_TO_FAVORITES',
    movie
  }
}

export const loadMovies = (movies) => {
  // console.log('2')
  return {
    type: 'LOAD_MOVIES',
    movies
  }
}

export const signInUser = (user) => {
  return {
    type: "SIGN_IN_USER",
    user
  }
}

export const removeFavorites = (movie) => {
  return {
    type: "REMOVE_FAVORITES",
    movie
  }
}

export const clearFavorites = () => {
  return {
    type: "CLEAR_FAVORITES",
  }
}
    
export const setCurrentMovie = (movie) => {
  return {
    type: 'SET_CURRENT',
    movie
  }
}
