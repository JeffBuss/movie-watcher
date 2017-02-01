import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import theatersReducer from './theaters-reducer';
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
  favoritesReducer,
  theatersReducer,
  userReducer
})

export default rootReducer;
