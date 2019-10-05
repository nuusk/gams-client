import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomPropTypes from '../helpers/CustomPropTypes';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Screen from '../components/Screen';
import { profileLogout } from '../actions/profileActions';

class LogoutPage extends Component {
  componentWillMount() {
    const { onLogout, history } = this.props;
    onLogout();
    history.replace('/');
  }

  // export default function LoginPage({ history }) {
  render() {
    return (
      <Layout columned narrow>
        <AppHeader />
        <main>
          <Screen>
            <div />
            <div>Logout</div>
            <div />
          </Screen>
        </main>
        <AppFooter />
      </Layout>
    );
  }
}

LogoutPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
  history: CustomPropTypes.history.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(profileLogout()),
});

export default connect(null, mapDispatchToProps)(LogoutPage);
