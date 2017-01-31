const theaters = (state=[], action) => {
  // console.log('3')
  switch(action.type) {
    case 'LOAD_THEATERS':
      return [action.movies];
    default:
      return state;
  }
}

export default theaters
