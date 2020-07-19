import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Button,
  FormLabel,
  FormControl,
} from 'react-bootstrap';

function SignupPage() {
  const initialState = {
    email: '',
    password: '',
    nationality: '',
    result: '',
    validated: false,
  };

  const [state, setState] = useState(initialState);

  const handleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const inputSave = (evento) => {
    evento.preventDefault();
    evento.currentTarget.checkValidity();
    console.log('Form válido? ', evento.currentTarget.checkValidity());
    console.log('evento: ', evento);

    let hello;
    switch (state.selectInputValue) {
      case 'English':
        hello = 'Hello';
        break;
      case 'German':
        hello = 'Hallo';
        break;
      case 'French':
        hello = 'Bonjour';
        break;
      default:
        hello = 'Hello';
        break;
    }

    let newResult = (
      <div>
        <p>{hello}</p>
        <p>Your email address is: {state.email}</p>
      </div>
    );

    setState({
        ...state,
        result: newResult,
      validated: true,
    });

  };

  return (
    <div className="Login">
      <Form noValidate validated={state.validated} onSubmit={inputSave}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            name="email"
            required
            onChange={handleInput}
            value={state.email}
          />
          <Form.Control.Feedback>
            Feedback de campo correcto
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Feedback de campo incorrecto
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            onChange={handleInput}
            value={state.password}
          />
        </FormGroup>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control
            as="select"
            name="selectInputValue"
            value={state.selectInputValue}
            onChange={handleInput}
          >
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="French">French</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" value="Login">
          Login
        </Button>
      </Form>
      {state.result}
    </div>
  );
}

export default SignupPage;
