import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import theatersReducer from './theaters-reducer';
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  favoritesReducer,
  theatersReducer,
  filterReducer
})

export default rootReducer;
