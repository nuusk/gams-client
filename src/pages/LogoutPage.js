import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomPropTypes from '../helpers/CustomPropTypes';
import { profileLogout } from '../actions/profileActions';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Screen from '../components/Screen';
import Wall from '../components/Wall';
import { seconds } from '../helpers/time';

class LogoutPage extends Component {
  constructor() {
    super();

    this.state = {
      redirectTimer: seconds(3),
    };

    this.tick = this.tick.bind(this);
  }

  componentWillMount() {
    const { onLogout } = this.props;
    onLogout();

    this.tickInterval = setInterval(() => {
      this.tick();
    }, seconds(1));
  }

  tick() {
    const { redirectTimer } = this.state;
    const { history } = this.props;

    this.setState({
      redirectTimer: redirectTimer - seconds(1),
    }, () => {
      if (redirectTimer <= seconds(1)) {
        history.replace('/');
        clearInterval(this.tickInterval);
      }
    });
  }

  render() {
    const { redirectTimer } = this.state;

    return (
      <Layout columned narrow>
        <AppHeader />
        <main>
          <Screen>
            <div />
            <Wall>
              <h1>
                {'You\'ve been logged out. Ouch...'}
              </h1>
              <p>
                {`You will be redirected to the home page in ${Math.ceil(redirectTimer / 1000)} s.`}
              </p>
            </Wall>
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
