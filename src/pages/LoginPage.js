import React from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Screen from '../components/Screen';
import LoginFormContainer from '../containers/LoginFormContainer';
import CustomPropTypes from '../helpers/CustomPropTypes';

export default function LoginPage({ history }) {
  return (
    <Layout columned narrow>
      <AppHeader />
      <main>
        <Screen>
          <div />
          <LoginFormContainer history={history} />
          <div />
        </Screen>
      </main>
      <AppFooter />
    </Layout>
  );
}

LoginPage.propTypes = {
  history: CustomPropTypes.history.isRequired,
};
