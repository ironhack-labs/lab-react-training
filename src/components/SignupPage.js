// components/SignupPage.js

import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';
import ValidEmail from './ValidEmail';
import PasswordStrength from './PasswordStrength';
import SignupButton from './SignupButton';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignupPage extends Component {
  state = { 
    email: '',
    validEmail: false,
    passwordStrength: 0,
    password: '',
    nationality: '',
  };

  handleInput = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value },
      this.checkEmailAndPassword(id, value)
    );
  };

  checkEmailAndPassword = (id, value) => {
    if (id === 'email') { this.checkEmail(value); }
    else if (id === 'password') { this.checkPassword(value); }
  }

  checkEmail = (email) => {
    const validEmail = this.isValidEmail(email);
    this.setState({ validEmail });
  }

  isValidEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  checkPassword = (password) => {
    const passwordStrength = zxcvbn(password).score;
    this.setState({ passwordStrength });
  }

  emailInputStyle = () => {
    const { email, validEmail } = this.state;
    return { border: email.length < 5 ? '1px solid #ced4da' : validEmail ? '2px solid green' : '2px solid red' }
  }

  passwordInputStyle = () => {
    const { password, passwordStrength } = this.state;
    return { border: !password ? '1px solid #ced4da' : passwordStrength > 2 ? '2px solid green' : '2px solid red' }
  }

  validateInputs = () => {
    const { validEmail, passwordStrength, nationality } = this.state;
    return validEmail && (passwordStrength > 2) && (nationality !== '');
  }

  render() {
    const { email, validEmail, password, passwordStrength, nationality } = this.state;
    const emailInputStyle = this.emailInputStyle();
    const passwordInputStyle = this.passwordInputStyle();
    const validInputs = this.validateInputs();
    return (
      <div className='signup-page'>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className='form-control'
            placeholder='jane@blog.com'
            value={email}
            style={emailInputStyle}
            onChange={this.handleInput}
            />
          {validEmail && <ValidEmail />}
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            className='form-control'
            placeholder='•••••••••'
            value={password}
            style={passwordInputStyle}
            onChange={this.handleInput}
            />
            {password && <PasswordStrength passwordStrength={passwordStrength} />}
        </div>

        <div className='form-group'>
          <label htmlFor='nationality'>Nationality</label>
          <select
            id='nationality'
            className='form-control'
            value={nationality}
            onChange={this.handleInput}
          >
            <option value=''>-- Your nationality --</option>
            <option value='en'>English</option>
            <option value='de'>German</option>
            <option value='fr'>French</option>
          </select>
        </div>

        <SignupButton
          validInputs={validInputs}
          email={email}
          nationality={nationality} />
      </div>
    );
  }
}

export default SignupPage;
