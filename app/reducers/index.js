import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import movieListReducer from './movieList-reducer';
import userReducer from "./user-reducer";
import currentMovieReducer from './currentMovie-Reducer';

const rootReducer = combineReducers({
  favoritesReducer,
  movieListReducer,
  userReducer,
  currentMovieReducer
})

export default rootReducer;
