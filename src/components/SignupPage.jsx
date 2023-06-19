import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleNationality = (e) => setNationality(e.target.value);

  const isEmailValid = (email) => {
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validateEmail.test(email);
  };

  const correctEmail = () => {
    if (isEmailValid(email)) {
      return 'Your email address is correct';
    } else {
      return '';
    }
  };

  const passwordStrength = (password) => {
    if (password.length < 8) {
      return 'weak';
    } else {
      return 'strong';
    }
  };

  const Greeting = (nationality) => {
    if (nationality === 'en') {
      return 'Hello';
    } else if (nationality === 'de') {
      return 'Hallo';
    } else if (nationality === 'fr') {
      return 'Bonjour';
    } else {
      return '';
    }
  };

  return (
    <div className="signup-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setEmail('');
          setPassword('');
          setNationality('en');
        }}
      >
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailInput}
            className={isEmailValid(email) ? 'valid-input' : 'invalid-input'}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordInput}
            className={`password ${passwordStrength(password)}`}
            required
          />
        </label>

        <label>
          Nationality:
          <select value={nationality} onChange={handleNationality}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </label>

        <div className="signup-btn">
          <button type="submit">Sign Up</button>
        </div>

        <div className="greeting-container">
          <p className="greeting">{Greeting(nationality)}</p>
          <p>Your email is {email}</p>
          <p>{correctEmail()}</p>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
