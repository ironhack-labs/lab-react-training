import { useState } from 'react';

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  return (
    <>
      <div className="signupForm">
        <div className="form-group">
          <label htmlFor="email">email :</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password :</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">nationality :</label>
          <select
            name="nationality"
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
      <div className="signupResult">
        <div>
          {nationality === 'fr'
            ? 'Bonjour'
            : nationality === 'de'
            ? 'Halo'
            : 'Hello'}
          Your email address is : {email}
        </div>
      </div>
    </>
  );
}
