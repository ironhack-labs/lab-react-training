import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email', email);
  };

  let greeting;

  switch (language) {
    case 'en':
      greeting = 'Hello';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
  }

  return (
    <div className="signup-form">
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
          name=""
          id="email"
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          name=""
          id="password"
          onChange={handlePasswordChange}
        />
        <label htmlFor="language">Language</label>
        <select
          value={language}
          name=""
          id="language"
          onChange={handleLanguageChange}
        >
          <option value="en">EN</option>
          <option value="de">DE</option>
          <option value="fr">FR</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <p>{greeting}</p>
      <p>Your email address is: {email}</p>
    </div>
  );
};

export default SignupPage;
