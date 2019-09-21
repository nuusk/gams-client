import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomPropTypes from '../helpers/CustomPropTypes';
import Form from '../components/Form';
import Cube from '../components/Cube';
import Arrow from '../components/Arrow';
import Avatar from '../components/Avatar';
import { profileLogin } from '../actions/profileActions';
import mapEventToState from '../helpers/mapEventToState';
import invalidEmail from '../helpers/invalidEmail';
import invalidName from '../helpers/invalidName';
import invalidPassword from '../helpers/invalidPassword';
import { request } from '../helpers/request';
import {
  setCookie, TOKEN_COOKIE, USERNAME_COOKIE, EMAIL_COOKIE,
} from '../helpers/cookies';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import SelectionPopup from '../components/SelectionPopup';

class RegisterFormContainer extends Component {
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
      selectedAvatar: '',
      isSelectionPopupOpened: false,
      awaiting: false,
      error: false,
      currentStep: 0,
      avatars: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = mapEventToState.bind(this);
    this.invalidEmail = invalidEmail.bind(this);
    this.invalidName = invalidName.bind(this);
    this.invalidPassword = invalidPassword.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.chooseAvatar = this.chooseAvatar.bind(this);
    this.updateInvalid = this.updateInvalid.bind(this);
    this.openSelectionPopup = this.openSelectionPopup.bind(this);
  }

  async componentWillMount() {
    const defaultAvatars = await request('/profiles/avatars', {
      method: 'GET',
    })

    if (defaultAvatars.length) {
      this.setState({
        avatars: defaultAvatars.slice(0, 20),
        selectedAvatar: defaultAvatars[Math.floor(Math.random() * 20)].imageURL,
      });
    }
  }

  chooseAvatar(imageURL) {
    this.setState({
      selectedAvatar: imageURL,
    }, () => {
      this.setState({
        isSelectionPopupOpened: false,
      });
    });
  }

  openSelectionPopup() {
    this.setState({
      isSelectionPopupOpened: true,
    });
  }

  updateInvalid(name, invalid) {
    const newState = { ...this.state };
    newState[name].invalid = invalid;
    this.setState(newState);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const {
      username, email, password, selectedAvatar
    } = this.state;

    const { onRegister, history } = this.props;

    this.setState({
      awaiting: true,
    });

    const registerResponse = await request('/profiles', {
      method: 'POST',
      body: {
        username, email, password, selectedAvatar,
      },
    });

    this.setState({
      awaiting: false,
    });

    if (registerResponse.token) {
      onRegister(registerResponse.username, registerResponse.email);
      setCookie(TOKEN_COOKIE, registerResponse.token);
      setCookie(USERNAME_COOKIE, registerResponse.username);
      setCookie(EMAIL_COOKIE, registerResponse.email);
      history.push('/');
    }
  }

  nextStep(e) {
    const {
      currentStep, username, email, password,
    } = this.state;
    e.preventDefault();

    let canGoNext = true;
    [username, email, password].forEach((property) => {
      if (!property.value) {
        this.updateInvalid(property.name, 'this field is required');
        canGoNext = false;
      }
      if (!property.value || property.invalid) {
        canGoNext = false;
      }
    });

    if (canGoNext) {
      this.setState({
        currentStep: currentStep + 1,
      });
    }
  }

  previousStep(e) {
    const { currentStep } = this.state;
    e.preventDefault();

    this.setState({
      currentStep: currentStep - 1,
    });
  }

  render() {
    const {
      username, email, password, awaiting, error, currentStep, avatars, isSelectionPopupOpened, selectedAvatar,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        {
          isSelectionPopupOpened && <SelectionPopup chooseAvatar={this.chooseAvatar} items={avatars} />
        }
        <Cube step={currentStep}>
          <div>
            <TextInput type="text" name="username" value={username.value} placeholder="username" onChange={this.handleChange} invalid={username.invalid} validateValue={this.invalidName} updateInvalid={this.updateInvalid} />
            <TextInput type="text" name="email" value={email.value} placeholder="email" onChange={this.handleChange} invalid={email.invalid} validateValue={this.invalidEmail} updateInvalid={this.updateInvalid} />
            <TextInput type="password" name="password" value={password.value} placeholder="password" onChange={this.handleChange} invalid={password.invalid} validateValue={this.invalidPassword} updateInvalid={this.updateInvalid} />
            <Button awaiting={awaiting} error={error} onClick={this.nextStep} alignBottom>next</Button>
          </div>
          <div>
            <Avatar imageURL={selectedAvatar} alt="" labelText="change avatar" onClick={this.openSelectionPopup} />
            <Arrow secondary absoluteLeft onClick={this.previousStep} />
            <Button awaiting={awaiting} error={error} onClick={this.handleSubmit} alignBottom>register</Button>
          </div>
          <div />
          <div />
        </Cube>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (username, email) => dispatch(profileLogin(username, email)),
});

RegisterFormContainer.propTypes = {
  onRegister: PropTypes.func.isRequired,
  history: CustomPropTypes.history.isRequired,
};

export default connect(null, mapDispatchToProps)(RegisterFormContainer);
