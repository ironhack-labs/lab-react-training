import { useState } from 'react';

function SignupPage() {
  const [greet, setGreet] = useState('en');
  const [email, setEmail] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const greetingFunc = () => {
    let greeting = '';
    if (greet === 'de') {
      greeting = 'Hallo';
    } else if (greet === 'fr') {
      greeting = 'Bonjour';
    } else if (greet === 'en') {
      greeting = 'Hello';
    }
    return greeting;
  };

  return (
    <div>
      <div>
        <form>
          <p>Email</p>
          <div style={{ width: '500px' }}>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <p>Password</p>
          <div style={{ width: '500px' }}>
            <input type="text" />
          </div>
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
          <button onClick={() => {}}>Sign up</button>
        </form>
        <hr />
        <p>{greetingFunc()}</p>
        <p>Your email address is: {email}</p>
        <p>
          Your email address is{' '}
          {emailRegex.test(email) ? 'correct' : 'incorrect'}
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
