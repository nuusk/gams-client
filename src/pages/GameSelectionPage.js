import React from 'react';
import GamesContainer from '../containers/GamesContainer';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';

export default function GameSelectionPage() {
  return (
    <Layout columned>
      <AppHeader />
      <GamesContainer />
    </Layout>
  );
}
