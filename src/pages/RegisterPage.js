import React from 'react';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import Screen from '../components/Screen';
import RegisterFormContainer from '../containers/RegisterFormContainer';
import CustomPropTypes from '../helpers/CustomPropTypes';

export default function RegisterPage({ history }) {
  return (
    <Layout columned narrow>
      <header>
        <AppLogo />
      </header>
      <main>
        <Screen>
          <div />
          <RegisterFormContainer history={history} />
          <div />
        </Screen>
      </main>
      <footer>
        2019
      </footer>
    </Layout>
  );
}

RegisterPage.propTypes = {
  history: CustomPropTypes.history.isRequired,
};
