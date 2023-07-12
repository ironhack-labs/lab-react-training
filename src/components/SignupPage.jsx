import React from 'react';
import { Input, Button } from 'reactstrap';
import { useState } from 'react';

function SignupPage() {
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

  const getGreetingBasedOnNationality = () => {
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
    <div className="form">
      Email
      <Input type="email" value={email} onChange={handleEmailChange} />
      Password{' '}
      <Input type="password" value={password} onChange={handlePasswordChange} />
      Nationality
      <Input
        type="select"
        value={nationality}
        onChange={handleNationalityChange}
      >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </Input>{' '}
      <Button className="signup-btn" color="primary">
        Sign up
      </Button>
      <p>{getGreetingBasedOnNationality()}</p>
      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
