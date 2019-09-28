import React from 'react';
import GamesContainer from '../containers/GamesContainer';
import PlayerContainer from '../containers/PlayerContainer';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import Screen from '../components/Screen';

export default function GameSelectionPage() {
  return (
    <Layout columned narrow>
      <header>
        <AppLogo />
      </header>
      <Screen>
        <PlayerContainer />
        <GamesContainer />
        <div />
      </Screen>
      <footer>
        2019
      </footer>
    </Layout>
  );
}
