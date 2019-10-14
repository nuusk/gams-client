import React from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Screen from '../components/Screen';
import EditProfileFormContainer from '../containers/EditProfileFormContainer';
import CustomPropTypes from '../helpers/CustomPropTypes';

export default function EditProfilePage({ history }) {
  return (
    <Layout columned narrow>
      <AppHeader />
      <main>
        <Screen>
          <div />
          <EditProfileFormContainer history={history} />
          <div />
        </Screen>
      </main>
      <AppFooter />
    </Layout>
  );
}

EditProfilePage.propTypes = {
  history: CustomPropTypes.history.isRequired,
};
