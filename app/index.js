import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
// import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/appContainer/AppContainer';
import MovieContainer from './containers/movieContainer/MovieContainer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//syncWithStore
const store = createStore(rootReducer, devTools);
// const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={MovieContainer} />
        <Route path='/favorites' component={MovieContainer} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('main'));
