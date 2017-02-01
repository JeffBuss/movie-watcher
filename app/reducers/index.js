import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import theatersReducer from './theaters-reducer';
import userReducer from "./user-reducer";
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  favoritesReducer,
  theatersReducer,
  userReducer,
  filterReducer
})

export default rootReducer;
