import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputGroupText,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';

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

  const getGreeting = () => {
    if (nationality === 'en') {
      return 'Hello';
    } else if (nationality === 'de') {
      return 'Hallo';
    } else if (nationality === 'fr') {
      return 'Bonjour';
    }
  };

  return (
    <div className="signup-page">
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              valid={email.includes('@')}
              invalid={email.length > 0 && !email.includes('@')}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <InputGroup>
            <InputGroupText>*</InputGroupText>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              valid={password.length >= 8}
              invalid={password.length > 0 && password.length < 8}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input
            type="select"
            id="nationality"
            value={nationality}
            onChange={handleNationalityChange}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </Input>
        </FormGroup>
      </Form>
      <p>{getGreeting()}</p>
      <p>Your email is {email}</p>
    </div>
  );
};

export default SignupPage;
