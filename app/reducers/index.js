import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';

const rootReducer = combineReducers({
  favoritesReducer,
})

export default rootReducer;
