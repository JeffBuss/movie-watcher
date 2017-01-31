const theaters = (state=[], action) => {
  switch(action.type) {
    case 'LOAD_THEATERS':
      return [action.movies];
    default:
      return state;
  }
}

export default theaters
