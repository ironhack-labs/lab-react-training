import { useState } from 'react';
import './signupPage.css';

const initialStateForm = {
  email: '',
  password: '',
  nationality: 'en',
};

const initialStateMessage = {
  email: '',
  greeting: '',
  text: '',
};

const SignupPage = () => {
  const [infoForm, setInfoForm] = useState(initialStateForm);
  const [message, setMessage] = useState(initialStateMessage);

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setInfoForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let greeting;
    let text;

    switch (infoForm.nationality) {
      case 'en':
        greeting = 'Hello';
        text = 'Your email address is: ';
        break;
      case 'de':
        greeting = 'Hallo';
        text = 'Ihre E-Mail-Adresse lautet: ';
        break;
      case 'fr':
        greeting = 'Bonjour';
        text = 'Votre adresse e-mail est: ';
        break;

      default:
        break;
    }

    setMessage((prev) => ({
      ...prev,
      email: infoForm.email,
      greeting,
      text,
    }));
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            value={infoForm.email}
            type="email"
            id="email"
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            value={infoForm.password}
            type="password"
            id="password"
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nationality">
          Nationality
          <select
            value={infoForm.nationality}
            id="nationality"
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="fr">François</option>
          </select>
        </label>

        <button type="submit">Sign Up</button>
      </form>

      {message.email && message.greeting && (
        <div className="greeting">
          <h3>{message.greeting}</h3>
          <p>
            {message.text} {message.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
