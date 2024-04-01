import { useState } from "react";
import './SignupPage.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  
  const emailIsValid = () => {
    return email.includes('@');
  }

  const passwordIsStrong = () => {
    return password.length >= 8;
  }

  const emailInput = (mail) => setEmail(mail.target.value);
  const passwordInput = (passwd) => setPassword(passwd.target.value);
  const nationalityInput = (nat) => setNationality(nat.target.value);

  const nationalityHello = () => {
    switch (nationality){
      case "en":
        return <p>Hello</p>;
        break;
      case "de":
        return <p>Hallo</p>;
        break;
      case "fr":
        return <p>Bonjour</p>;
        break;
    }
  }

  return (
    <div className="signuppage-container">
      <form className="form-container">
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={emailInput}
          className={emailIsValid() ? 'valid' : 'invalid'}
        />
        <p className="feedback">{emailIsValid() ? 'Email is valid' : 'Email is invalid'}</p>
        
        <label htmlFor="password">password</label>
        <input 
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={passwordInput}
          className={passwordIsStrong() ? 'valid' : 'invalid'}
        />
        <p className="feedback">{passwordIsStrong() ? 'Password is strong' : 'Password is weak'}</p>

        <label htmlFor="nationality">nationality</label>
        <select 
          type="nationality"
          name="nationality"
          id="nationality"
          value={nationality}
          onChange={nationalityInput}
        >
          <option value={"en"}>English</option>
          <option value={"de"}>German</option>
          <option value={"fr"}>French</option>
        </select>
        
        <button type="submit">Sign Up</button>
      </form>
      
      <div className="response-container">
        <p>{nationalityHello()}</p>
        <p>Your email adress is {email}</p>
        <p>Your email adress is {emailIsValid() ? 'correct' : 'incorrect'}</p>
      </div>
    </div>
  );
}

export default SignupPage;