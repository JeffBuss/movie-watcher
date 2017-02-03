const favorites = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.movie];

    case "REMOVE_FAVORITES":
      return state.filter(movie => {
        if(action.movie.title !== movie.title){
          return movie;
        }
      });

    case "CLEAR_FAVORITES":
      return [];

    default:
      return state;
  }
}



export default favorites
