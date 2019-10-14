import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import store from './store/store';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import GameSelectionPage from './pages/GameSelectionPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LogoutPage from './pages/LogoutPage';
import EditProfilePage from './pages/EditProfilePage';
import UnauthorizedPage from './pages/UnauthorizedPage';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={GameSelectionPage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/edit-profile" component={EditProfilePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/unauthorized" component={UnauthorizedPage} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
