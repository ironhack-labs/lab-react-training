import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordStrong = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isEmailValid ? 'green' : 'red' }}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: isPasswordStrong ? 'green' : 'red' }}
      />

      <label>Select Nationality:</label>
      <select value={nationality} onChange={handleNationalityChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>

      <p>
        {nationality === 'en'
          ? 'Hello'
          : nationality === 'de'
          ? 'Hallo'
          : nationality === 'fr'
          ? 'Bonjour'
          : ''}
      </p>

      <p>Your email is {email}</p>
    </div>
  );
};

export default SignupPage;