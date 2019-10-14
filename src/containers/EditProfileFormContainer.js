import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomPropTypes from '../helpers/CustomPropTypes';
import Form from '../components/Form';
import Cube from '../components/Cube';
import { profileLogin } from '../actions/profileActions';
import mapEventToState from '../helpers/mapEventToState';
import invalidName from '../helpers/invalidName';
import invalidEmail from '../helpers/invalidEmail';
import invalidPassword from '../helpers/invalidPassword';
import { request } from '../helpers/request';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

class EditProfileFormContainer extends Component {
  constructor() {
    super();

    this.state = {
      username: {
        name: 'username',
        value: '',
        invalid: '',
      },
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
    this.invalidName = invalidName.bind(this);
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
      username, email, password,
    } = this.state;

    const { onEditProfile, history } = this.props;

    this.setState({
      awaiting: true,
    });

    const editProfileResponse = await request('/profiles', {
      method: 'PATCH',
      body: {
        username: username.value,
        email: email.value,
        password: password.value,
      },
    });

    this.setState({
      awaiting: false,
    });

    if (editProfileResponse.status === 200 || editProfileResponse.status === 204) {
      onEditProfile(editProfileResponse.username, editProfileResponse.email);
      history.push('/');
    }
  }

  render() {
    const {
      username,
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
              name="username"
              value={username.value}
              placeholder="username"
              onChange={this.handleChange}
              invalid={username.invalid}
              validateValue={this.invalidName}
              updateInvalid={this.updateInvalid}
            />
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
              edit profile
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
  onEditProfile: (username, email) => dispatch(profileLogin(username, email)),
});

EditProfileFormContainer.propTypes = {
  onEditProfile: PropTypes.func.isRequired,
  history: CustomPropTypes.history.isRequired,
};

export default connect(null, mapDispatchToProps)(EditProfileFormContainer);
