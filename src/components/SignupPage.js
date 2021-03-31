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
  const [collapse, setCollapse] = useState(false);

  const dictionary = {
    English: 'Hello',
    French: 'Salut',
    German: 'Hallo',
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
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
            valid
          />
          <FormFeedback valid>You typed a valid email</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            invalid
          />
          <FormFeedback>Your password is too weak</FormFeedback>
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
