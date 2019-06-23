import React from 'react';
import GamesContainer from '../containers/GamesContainer';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import createScreen from '../components/createScreen';

const Screen = createScreen(GamesContainer, AppLogo, AppLogo);

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
