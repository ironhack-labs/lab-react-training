import React from 'react';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from 'react-bootstrap';

const SignupPage = () => {
  return (
    <div className="wrapper">
      <Form>
        <FormGroup>
          <FormLabel>Email address</FormLabel>
          <FormControl
            type="email"
            name="email"
            placeholder="Type your email address"
            required
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            name="password"
            placeholder="******"
            required
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Nationality</FormLabel>
          <FormControl as="select" name="nationality">
            <option value="0">Select a nationality</option>
            <option value="1">en</option>
            <option value="2">de</option>
            <option value="3">fr</option>
          </FormControl>
        </FormGroup>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;
