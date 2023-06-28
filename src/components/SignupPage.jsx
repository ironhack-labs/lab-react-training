import { useState } from 'react';
import Greetings from './Greetings';

export default function SignupPage() {
  const [greet, setGreet] = useState('en');
  const [email, setEmail] = useState('');
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <>
      <form>
        <p>Email</p>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <p>Password</p>
        <input type="password" />

        <p>Nationality</p>
        <select
          onChange={(e) => {
            setGreet(e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button>Sign up</button>
      </form>

      <Greetings lang={greet} />
      <p>Your email address is: {email}</p>
      <p>
        Your email address is {emailCheck.test(email) ? 'correct' : 'incorrect'}
      </p>
    </>
  );
}
