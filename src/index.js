import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import GamesContainer from './containers/GamesContainer';

render(
  <Provider store={store}>
    <GamesContainer basename={process.env.PUBLIC_URL} />
  </Provider>,
  document.getElementById('root'),
);
