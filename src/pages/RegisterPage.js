import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import AppLogo from '../components/AppLogo';
import Form from '../components/Form';
import { profileRegister } from '../actions/profileActions';
import mapEventToState from '../helpers/mapEventToState';
import { request } from '../helpers/request';

// import createScreen from '../components/createScreen';

// const Screen = createScreen(Form, AppLogo, AppLogo);

class RegisterPage extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = mapEventToState.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      name, username, email, password,
    } = this.state;

    request('/profiles', {
      method: 'POST',
      body: {
        name, username, email, password,
      },
    });
  }

  render() {
    const {
      name, username, email, password,
    } = this.state;

    return (
      <Layout columned narrow>
        <header>
          <AppLogo />
        </header>
        <Form onSubmit={this.handleSubmit}>
          <input name="name" value={name} placeholder="name" onChange={this.handleChange} />
          <input name="username" value={username} placeholder="username" onChange={this.handleChange} />
          <input name="email" value={email} placeholder="email" onChange={this.handleChange} />
          <input name="password" value={password} type="password" placeholder="password" onChange={this.handleChange} />
          <button type="submit">register</button>
        </Form>
        <footer>
          2019
        </footer>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (username, email) => dispatch(profileRegister(username, email)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
