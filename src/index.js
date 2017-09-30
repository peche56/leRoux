import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import { BrowserRouter, Match, Miss } from 'react-router-dom';
 import {connectRouter, routerMiddleware} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import { createDevTools } from 'redux-devtools';
import Dispatcher from 'redux-devtools-dispatch';
 import {provider} from 'react-redux';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import rootReducers from './reducers/reducer';

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();
const location = history.location;

const store = createStore(
  connectRouter(history)(rootReducers),

  storeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);

render(
  <BrowserRouter>
  <provider store={store}>
    <Header/>
    <App />
  </provider>
</BrowserRouter>,
  document.getElementById('root'));
