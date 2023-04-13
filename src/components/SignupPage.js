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
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
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
        return '';
    }
  };

  const getNationalityLabel = () => {
    switch (nationality) {
      case 'en':
        return 'English';
      case 'de':
        return 'German';
      case 'fr':
        return 'French';
      default:
        return '';
    }
  };

  return (
    <div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: isEmailValid() ? 'green' : 'red' }}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: isPasswordStrong() ? 'green' : 'red' }}
        />
      </div>
      <div>
        <label>Nationality:</label>
        <select value={nationality} onChange={handleNationalityChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div>
        <p>{getGreeting()}</p>
        <p>Your email is {email}</p>
        <p>You selected {getNationalityLabel()} as your nationality</p>
      </div>
    </div>
  );
};

export default SignupPage;
