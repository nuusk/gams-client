import React from 'react';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import LoginFormContainer from '../containers/LoginFormContainer';
import CustomPropTypes from '../helpers/CustomPropTypes';

export default function LoginPage({ history }) {
  return (
    <Layout columned narrow>
      <header>
        <AppLogo />
      </header>
      <LoginFormContainer history={history} />
      <footer>
        2019
      </footer>
    </Layout>
  );
}

LoginPage.propTypes = {
  history: CustomPropTypes.history.isRequired,
};
