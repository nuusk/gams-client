import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Screen from '../components/Screen';
import Wall from '../components/Wall';

export default function GameSelectionPage() {
  return (
    <Layout columned narrow>
      <AppHeader />
      <Screen>
        <div />
        <Wall>
          <h1>
            It's just a hub for games.
          </h1>
          <p>
            Here you can find many multiplayer games for you to play with your friends. If you have them, that is.
          </p>
          <p>
            If you don't have an account, <Link to="/register">make one.</Link>
          </p>
        </Wall>
        <div />
      </Screen>
      <AppFooter />
    </Layout>
  );
}
