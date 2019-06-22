import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store/store';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import GameSelectionPage from './pages/GameSelectionPage';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GameSelectionPage basename={process.env.PUBLIC_URL} />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
