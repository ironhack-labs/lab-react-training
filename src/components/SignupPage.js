import { useState } from "react";
import '../App.css'

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
  
    const isEmailValid = (email) => {
      // Basic email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const getPasswordStrength = (password) => {
      if (password.length < 8) {
        return 'Weak';
      }
      return 'Strong';
    };
  
    const getGreeting = (nationality) => {
      switch (nationality) {
        case 'en':
          return 'Hello';
        case 'de':
          return 'Hallo';
        case 'fr':
          return 'Bonjour';
        default:
          return '';
      }
    };
  
    const isPasswordWeak = password.length < 8;
  
    return (
      <div className="signup-container">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={isEmailValid(email) ? 'valid-input' : 'invalid-input'}
        />
  
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={`password-input ${getPasswordStrength(password)}`}
        />
  
        <label>Nationality:</label>
        <select value={nationality} onChange={handleNationalityChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
  
        <p className="greeting">{getGreeting(nationality)}</p>
        <p>Your email is {email}</p>
        
  
        {isPasswordWeak && (
          <div className="signup-button">
            <button>Sign Up</button>
          </div>
        )}
      </div>
    );
  }
  

export default SignupPage