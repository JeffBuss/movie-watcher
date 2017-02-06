const movies = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return action.movies;
    default:
      return state;
  }
};

export default movies;
