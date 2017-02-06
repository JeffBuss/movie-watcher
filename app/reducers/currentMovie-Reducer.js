const currentMovie = (state='', action) => {
  switch(action.type) {
    case 'SET_CURRENT':
      return action.movie;
    default:
      return state;
  }
}

export default currentMovie;
