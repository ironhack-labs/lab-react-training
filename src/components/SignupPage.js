import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
  Collapse,
} from 'reactstrap';
import '../assets/css/SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('German');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [collapse, setCollapse] = useState(false);

  const dictionary = {
    English: 'Hello',
    French: 'Salut',
    German: 'Hallo',
  };

  const emailValidate = emailError ? 'valid' : 'invalid';
  const emailValidateMessage = emailError
    ? 'You typed a valid email'
    : 'You typed an invalid email';

  const passwordValidate = passwordError ? 'valid' : 'invalid';
  const passwordValidateMessage = passwordError
    ? 'You typed a valid password'
    : 'Your password is too weak';

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePassword = (password) => {
    const mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );
    return mediumRegex.test(password);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const handleNationality = (e) => {
    setNationality(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };

  return (
    <div className="SignupPage">
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            invalid={!emailError}
            valid={emailError}
          />
          <FormFeedback invalid={!emailError} valid={emailError}>
            {emailValidateMessage}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            invalid={!passwordError}
            valid={passwordError}
          />
          <FormFeedback invalid={!passwordError} valid={passwordError}>
            {passwordValidateMessage}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input
            type="select"
            name="nationality"
            id="nationality"
            value={nationality}
            onChange={handleNationality}
          >
            <option>German</option>
            <option>English</option>
            <option>French</option>
          </Input>
        </FormGroup>
        <Button color="info" onClick={handleSubmit}>
          Sign up
        </Button>
      </Form>
      <Collapse isOpen={collapse}>
        <br />
        <p>{dictionary[nationality]}</p>
        <p>Your email adress is {email}</p>
      </Collapse>
    </div>
  );
};

export default SignupPage;
