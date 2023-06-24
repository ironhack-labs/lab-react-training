import React from 'react';
import { useState } from 'react';

function SignupPage() {
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
  const greetings = {
    en: 'Hello',
    de: 'Hallo',
    fr: 'Bonjour',
  };

  const getGreeting = () => {
    return greetings[nationality] || 'Hello';
  };
  return (
    <div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>

        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <br />

        <label>
          Nationality:
          <select value={nationality} onChange={handleNationalityChange}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </label>

        <br />

        <p>{getGreeting()}</p>

        <p>Your email is {email}</p>
        <p>Your password is {password}</p>

      </div>
    </div>
  );
}

export default SignupPage;
