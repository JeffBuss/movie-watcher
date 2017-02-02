import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import moviesReducer from './movies-reducer';
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
  favoritesReducer,
  moviesReducer,
  userReducer, 
})

export default rootReducer;
