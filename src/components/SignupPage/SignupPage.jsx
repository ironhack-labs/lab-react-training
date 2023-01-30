import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  function handleCheckEmail() {
    if (email.includes('@') && email.includes('.')) {
      return 'green';
    } else {
      return 'red';
    }
  }

  function handleCheckPassword() {
    if (password.length >= 8) {
      return 'green';
    } else {
      return 'red';
    }
  }

  function handleDisplayText() {
    if (nationality === 'en') {
      return 'Hello';
    } else if (nationality === 'de') {
      return 'Hallo';
    } else if (nationality === 'fr') {
      return 'Bonjour';
    }
  }

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ borderColor: handleCheckEmail() }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ borderColor: handleCheckPassword() }}
          />
        </label>
        <br />
        <label>
          Nationality:
          <select
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </label>
        <button type="submit">Sign up</button>
      </form>
      <p>{handleDisplayText()}</p>
      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
