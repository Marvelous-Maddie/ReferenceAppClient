import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';

import { history } from './_helpers';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import { App } from './app';

import './style.css';

render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
