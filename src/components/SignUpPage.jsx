import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  // Email validation using regex
  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Simple password strength check (example: length >= 8)
  const isStrongPassword = password => password.length >= 8;

  // Get greeting based on nationality
  const greetByNationality = {
     en: "Hello",
     de: "Hallo",
     fr: "Bonjour"
  };

  return (
    <div>
      <input 
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        style={{ borderColor: email === '' ? 'black' : isValidEmail(email) ? 'green' : 'red' }}
      />
      <input 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        style={{ borderColor: password === '' ? 'black' : isStrongPassword(password) ? 'green' : 'red' }}
      />
      <select value={nationality} onChange={e => setNationality(e.target.value)}>
         <option value="en">English</option>
         <option value="de">Deutsch</option>
         <option value="fr">Français</option>
      </select>

      <p>{greetByNationality[nationality]}, your email is {email}</p>
    </div>
  );
};

export default SignupPage;