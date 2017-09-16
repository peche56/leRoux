import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
// import {provider} from 'react-redux';
import './index.css';
import App from './components/App';

const store = createStore(
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById('root'));
