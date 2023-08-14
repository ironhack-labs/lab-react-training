import React, { useState } from 'react';
import { Input, Form, FormGroup, Label, Button, Alert } from 'reactstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
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

  const isEmailValid = () => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isPasswordStrong = () => {
    return password.length >= 8;
  };

  return (
    <div className="container mt-5">
      <Form className="signup-form">
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={isEmailValid() ? 'is-valid' : 'is-invalid'}
          />
          <div className="valid-feedback">Valid email</div>
          <div className="invalid-feedback">Invalid email</div>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={isPasswordStrong() ? 'is-valid' : 'is-invalid'}
          />
          <div className="valid-feedback">Strong password</div>
          <div className="invalid-feedback">Weak password (at least 8 characters)</div>
        </FormGroup>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input type="select" id="nationality" value={nationality} onChange={handleNationalityChange}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </Input>
        </FormGroup>
        <p>{getGreeting()}</p>
        <p>Your email is {email}</p>
        <Button color="primary">Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignupPage;
