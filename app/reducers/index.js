import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import movieListReducer from './movieList-reducer';
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
  favoritesReducer,
  movieListReducer,
  userReducer,
})

export default rootReducer;
