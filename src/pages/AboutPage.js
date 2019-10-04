import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import Screen from '../components/Screen';
import Wall from '../components/Wall';

export default function GameSelectionPage() {
  return (
    <Layout columned narrow>
      <AppHeader />
      <Screen>
        <PlayerContainer />
        <Wall>
          <h1>
            It's just a hub for games.
          </h1>
          <p>
            Here you can find many multiplayer games for you to play with your friends. If you have them, that is.
          </p>
        </Wall>
        <div />
      </Screen>
      <footer>
        2019
      </footer>
    </Layout>
  );
}
