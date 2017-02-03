import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import './reset'
import './styles';
import App from './containers/appContainer/AppContainer';
import MovieListContainer from './containers/movieListContainer/MovieListContainer';
import SignUpContainer from './containers/signUpContainer/SignUpContainer';
import FavoritesContainer from "./containers/favoritesContainer/FavoritesContainer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//syncWithStore
const store = createStore(rootReducer, devTools);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={MovieListContainer} />
        <Route path='/join' component={SignUpContainer} />
        <Route path='/favorites' component={FavoritesContainer} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('main'));
