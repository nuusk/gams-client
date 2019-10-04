import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';
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
            Want to get in touch?
          </h1>
          <span>
            Let us know at
          </span>
          <a href="mailto:piotr@ptak.dev">piotr@ptak.dev</a>
          <span>
            or
          </span>
          <a href="mailto:milosz.pogodski@student.put.poznan.pl">milosz.pogodski@student.put.poznan.pl</a>
        </Wall>
        <div />
      </Screen>
      <AppFooter />
    </Layout >
  );
}
