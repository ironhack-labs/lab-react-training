import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [registerEmail, setRegisterEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }; // prevent the form from reloading when you submit your account

  return (
    <div className="form-outer-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
        <label htmlFor="select">Nationality:</label>
        <select>
          <option>ENG</option>
          <option>DE</option>
          <option>FR</option>
        </select>
      </form>
      <div className="message-container">
        <p>Hallo</p>
        <p>Your Email address is:</p>
        <p>Your email address is correct</p>
      </div>
    </div>
  );
};

export default SignupPage;
