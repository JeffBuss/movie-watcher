import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import theatersReducer from './theaters-reducer';

const rootReducer = combineReducers({
  favoritesReducer,
  theatersReducer
})

export default rootReducer;
