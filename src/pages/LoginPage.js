import React from 'react';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import Screen from '../components/Screen';
import LoginFormContainer from '../containers/LoginFormContainer';
import CustomPropTypes from '../helpers/CustomPropTypes';

export default function LoginPage({ history }) {
  return (
    <Layout columned narrow>
      <header>
        <AppLogo />
      </header>
      <main>
        <Screen>
          <div />
          <LoginFormContainer history={history} />
          <div />
        </Screen>
      </main>
      <footer>
        <div>2019</div>
        <div>tiwpr</div>
        <div>PUT</div>
      </footer>
    </Layout>
  );
}

LoginPage.propTypes = {
  history: CustomPropTypes.history.isRequired,
};
