const movies = (state = [], action) => {
  console.log(action.movies)
  switch (action.type) {
    case 'LOAD_MOVIES':
      return action.movies;
    default:
      return state;
  }
};

export default movies;
