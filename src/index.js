import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import { BrowserRouter, Match, Miss } from 'react-router-dom';
// import {connectRouter, routerMiddleware} from 'connected-react-router';
//import { createDevTools } from 'redux-devtools';
//import Dispatcher from 'redux-devtools-dispatch';
// import {provider} from 'react-redux';
import './index.css';
import App from './components/App';

const store = createStore(
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <BrowserRouter>
  <provider store={store}>
    <App />
  </provider>
</BrowserRouter>,
  document.getElementById('root'));
