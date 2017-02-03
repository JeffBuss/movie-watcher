const movies = (state = [], action) => {
  console.log(action.movies)
  // console.log('3')
  switch (action.type) {
    case 'LOAD_MOVIES':
      return action.movies;
    default:
      return state;
  }
};

export default movies;
