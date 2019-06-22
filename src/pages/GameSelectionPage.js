import React from 'react';
import GamesContainer from '../containers/GamesContainer';
import Layout from '../components/Layout';

export default function GameSelectionPage() {
  return (
    <Layout columned>
      <GamesContainer />
    </Layout>
  );
}
