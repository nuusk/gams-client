import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomPropTypes from '../helpers/CustomPropTypes';
import Form from '../components/Form';
import Cube from '../components/Cube';
import { profileLogin } from '../actions/profileActions';
import mapEventToState from '../helpers/mapEventToState';
import invalidEmail from '../helpers/invalidEmail';
import invalidPassword from '../helpers/invalidPassword';
import { request } from '../helpers/request';
import {
  setCookie, TOKEN_COOKIE, USERNAME_COOKIE, EMAIL_COOKIE,
} from '../helpers/cookies';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

class LoginFormContainer extends Component {
  constructor() {
    super();

    this.state = {
      email: {
        name: 'email',
        value: '',
        invalid: '',
      },
      password: {
        name: 'password',
        value: '',
        invalid: '',
      },
      awaiting: false,
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = mapEventToState.bind(this);
    this.invalidEmail = invalidEmail.bind(this);
    this.invalidPassword = invalidPassword.bind(this);
    this.updateInvalid = this.updateInvalid.bind(this);
  }

  updateInvalid(name, invalid) {
    const newState = { ...this.state };
    newState[name].invalid = invalid;
    this.setState(newState);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const {
      email, password,
    } = this.state;

    const { onLogin, history } = this.props;

    this.setState({
      awaiting: true,
    });

    const loginResponse = await request('/profiles/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    });

    this.setState({
      awaiting: false,
    });

    if (loginResponse.token) {
      onLogin(loginResponse.username, loginResponse.email);
      setCookie(TOKEN_COOKIE, loginResponse.token);
      setCookie(USERNAME_COOKIE, loginResponse.username);
      setCookie(EMAIL_COOKIE, loginResponse.email);
      history.push('/');
    }
  }

  render() {
    const {
      email,
      password,
      awaiting,
      error,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Cube step={0}>
          <div>
            <TextInput
              type="text"
              name="email"
              value={email.value}
              placeholder="email"
              onChange={this.handleChange}
              invalid={email.invalid}
              validateValue={this.invalidEmail}
              updateInvalid={this.updateInvalid}
            />
            <TextInput
              type="password"
              name="password"
              value={password.value}
              placeholder="password"
              onChange={this.handleChange}
              invalid={password.invalid}
              validateValue={this.invalidPassword}
              updateInvalid={this.updateInvalid}
            />
            <Button
              awaiting={awaiting}
              error={error}
              onClick={this.nextStep}
              alignBottom
            >
              login
            </Button>
          </div>
          <div />
          <div />
          <div />
        </Cube>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (username, email) => dispatch(profileLogin(username, email)),
});

LoginFormContainer.propTypes = {
  onLogin: PropTypes.func.isRequired,
  history: CustomPropTypes.history.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginFormContainer);
