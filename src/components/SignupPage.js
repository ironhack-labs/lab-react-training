import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import Greetings from './Greetings';

const SignupPage = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    nationality: '',
    validated: false,
  });
  const checkEmail = () => {
    const regexEmailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmailValidation.test(state.email) ? true : false;
  };
  const checkPassword = () => {
    const regexPwdValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return state.password.match(regexPwdValidation) ? true : false;
  };
  const checkSelector = () => {
    return state.nationality === 'en' || 'de' || 'fr' ? true : false;
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.currentTarget.checkValidity();
    setState({ ...state, validated: true });
    e.preventDefault();
  };
  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit} noValidate validated={state.validated}>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            value={state.email}
            placeholder="Type your email address"
            required
          ></Form.Control>
          {checkEmail() ? (
            <Form.Control.Feedback>Yay! It looks good!</Form.Control.Feedback>
          ) : (
            <Form.Control.Feedback type="invalid">
              Please type a valid email
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
            value={state.password}
            placeholder="********"
            required
          ></Form.Control>
          {checkPassword() ? (
            <Form.Control.Feedback>
              Such a strong password!
            </Form.Control.Feedback>
          ) : (
            <Form.Control.Feedback type="invalid">
              Please select a stronger password!
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup>
          <Form.Control
            as="select"
            name="nationality"
            value={state.nationality}
            onChange={handleChange}
          >
            <option value="0">Select a nationality</option>
            <option value="en">en</option>
            <option value="de">de</option>
            <option value="fr">fr</option>
          </Form.Control>
          {checkSelector() ? (
            <Form.Control.Feedback>Great!</Form.Control.Feedback>
          ) : (
            <Form.Control.Feedback type="invalid">
              Please select a nationality
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <div className="text">
        {checkEmail() ? (
          <div>
            <Greetings lang={state.nationality} />
            <h2>Your email address is: {state.email}</h2>
            <h2>Your email address is correct</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SignupPage;
