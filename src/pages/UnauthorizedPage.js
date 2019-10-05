import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Screen from '../components/Screen';
import Wall from '../components/Wall';

export default function UnauthorizedPage() {
  return (
    <Layout columned narrow>
      <AppHeader />
      <Screen>
        <div />
        <Wall>
          <h1>
            Who goes there?
          </h1>
          <p>
            To go further, you need to <Link to="/login">log in.</Link>
            <br />
            If you don't have an account, <Link to="/register">make one.</Link>
          </p>
        </Wall>
        <div />
      </Screen>
      <AppFooter />
    </Layout>
  );
}
