import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import moviesReducer from './movies-reducer';
import userReducer from "./user-reducer";
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  favoritesReducer,
  moviesReducer,
  userReducer,
  filterReducer
})

export default rootReducer;
