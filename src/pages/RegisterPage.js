import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomPropTypes from '../helpers/CustomPropTypes';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import Form from '../components/Form';
import { profileLogin } from '../actions/profileActions';
import mapEventToState from '../helpers/mapEventToState';
import validateEmail from '../helpers/validateEmail';
import { request } from '../helpers/request';
import {
  setCookie, TOKEN_COOKIE, USERNAME_COOKIE, EMAIL_COOKIE,
} from '../helpers/cookies';
import Screen from '../components/Screen';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

class RegisterPage extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      awaiting: false,
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = mapEventToState.bind(this);
    this.validateEmail = validateEmail.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const {
      name, username, email, password,
    } = this.state;

    const { onRegister, history } = this.props;

    this.setState({
      awaiting: true,
    });

    const registerResponse = await request('/profiles', {
      method: 'POST',
      body: {
        name, username, email, password,
      },
    });

    if (registerResponse.token) {
      onRegister(registerResponse.username, registerResponse.email);
      setCookie(TOKEN_COOKIE, registerResponse.token);
      setCookie(USERNAME_COOKIE, registerResponse.username);
      setCookie(EMAIL_COOKIE, registerResponse.email);
      history.push('/');
    }
  }

  render() {
    const {
      name, username, email, password, awaiting, error,
    } = this.state;

    return (
      <Layout columned narrow>
        <header>
          <AppLogo />
        </header>
        <main>
          <Screen>
            <div />
            <Form onSubmit={this.handleSubmit}>
              <TextInput type="text" name="name" value={name} placeholder="name" onChange={this.handleChange} />
              <TextInput type="text" name="username" value={username} placeholder="username" onChange={this.handleChange} />
              <TextInput type="text" name="email" value={email} placeholder="email" onChange={this.handleChange} onValidate={this.validateEmail} />
              <TextInput type="password" name="password" value={password} placeholder="password" onChange={this.handleChange} />
              <Button type="submit" awaiting={awaiting} error={error} onSubmit={this.handleSubmit}>register</Button>
            </Form>
            <div />
          </Screen>
        </main>
        <footer>
          2019
        </footer>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (username, email) => dispatch(profileLogin(username, email)),
});

RegisterPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
  history: CustomPropTypes.history.isRequired,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
