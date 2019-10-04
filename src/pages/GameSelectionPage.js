import React from 'react';
import GamesContainer from '../containers/GamesContainer';
import PlayerContainer from '../containers/PlayerContainer';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Screen from '../components/Screen';

export default function GameSelectionPage() {
  return (
    <Layout columned narrow>
      <AppHeader />
      <Screen>
        <PlayerContainer />
        <GamesContainer />
        <div />
      </Screen>
      <AppFooter />
    </Layout>
  );
}
