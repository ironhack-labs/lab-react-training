import React from 'react';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="form-outer-container">
      <form className="form-container">
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
