/*

import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const isEmailValid = () => {
    // I  can implement your own email validation logic here
    return email.includes('@');
  };

  const isPasswordStrong = () => {
    // I can mplement your own password strength validation logic here
    return password.length >= 8;
  };

  const getGreeting = () => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div className="signup-page">
      <div className="form-group">
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          className={`form-control ${isEmailValid() ? 'is-valid' : 'is-invalid'}`}
          value={email}
          onChange={handleEmailChange}
        />
        <div className="invalid-feedback">You typed a valid email.</div>
      </div>

      <div className="form-group">
        <label htmlFor="password-input">Password</label>
        <input
          type="password"
          id="password-input"
          className={`form-control ${isPasswordStrong() ? 'is-valid' : 'is-invalid'}`}
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="invalid-feedback">Your password is too weak.</div>
      </div>

      <div className="form-group">
        <label htmlFor="nationality-select">Nationality</label>
        <select
          id="nationality-select"
          className="form-control"
          value={nationality}
          onChange={handleNationalityChange}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      <p>{getGreeting()}</p>

      <p>Your email is {email}</p>
    </div>
  );
};

export default SignupPage;
*/

import React, { useState } from 'react';
import { Input, Label, FormGroup, Form, Button } from 'reactstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  let validationClass = '';
  if (email.includes('@')) {
    validationClass = 'is-valid';
  } else if (email !== '') {
    validationClass = 'is-invalid';
  }

  let validationClassP = '';
  if (password.length >= 8) {
    validationClassP = 'is-valid';
  } else if (password !== '') {
    validationClassP = 'is-invalid';
  }

  const getGreeting = () => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Guten Tag';
      case 'fr':
        return 'Bonjour';
      default:
        return '';
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={validationClass}
        />
        <div className="valid-feedback">You typed a valid email</div>
        <div className="invalid-feedback">Invalid email address</div>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange}
            className={validationClassP} 
        />
        <div className="valid-feedback">Your password is Strong.</div>
        <div className="invalid-feedback">Your password is too weak.</div>
      </FormGroup>
      <FormGroup>
        <Label>Nationality</Label>
        <Input type="select" value={nationality} onChange={handleNationalityChange}>
          <option value="">Select nationality</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </Input>
      </FormGroup>
      <Button type="submit">Sign up</Button>
      <div>{`${getGreeting()}, your email address is: ${email}`}</div>
    </Form>
  );
};

export default SignupPage;
