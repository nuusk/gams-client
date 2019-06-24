import React from 'react';
import GamesContainer from '../containers/GamesContainer';
import PlayerContainer from '../containers/PlayerContainer';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import createScreen from '../components/createScreen';

const Screen = createScreen(GamesContainer, PlayerContainer, AppLogo);

export default function GameSelectionPage() {
  return (
    <Layout columned narrow>
      <header>
        <AppLogo />
      </header>
      <Screen />
      <footer>
        2019
      </footer>
    </Layout>
  );
}
