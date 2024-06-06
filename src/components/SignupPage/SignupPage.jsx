import { useState } from 'react';
import Greetings from '../Greatings/Greetings';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleNationality = (event) => setNationality(event.target.value);

  const handleSubmit = (event) => event.preventDefault();

  const greeting = '';
  if (nationality === 'de') {
    greeting = 'Hallo';
  } else if (nationality === 'fr') {
    greeting = 'Bonjour';
  }

  return (
    <div>
      <form>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <label>Nationality</label>
        <select value={nationality} onChange={handleNationality}>
          <option>FR</option>
          <option>DE</option>
        </select>
        <button type="submit" onSubmit={handleSubmit}>
          Sign up
        </button>
      </form>
      <div>
        <Greetings lang={greeting} />
        <p>Your email is:{email}</p>
        <p>Your email address is: </p>
      </div>
    </div>
  );
}
