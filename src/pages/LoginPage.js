import React from 'react';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import RegisterFormContainer from '../containers/RegisterFormContainer';

export default function LoginPage() {
  return (
    <Layout columned narrow>
      <header>
        <AppLogo />
      </header>
      <RegisterFormContainer />
      <footer>
        2019
      </footer>
    </Layout>
  );
}
