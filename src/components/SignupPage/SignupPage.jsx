import React, { useState } from 'react';
import './SignupPage.css';
  const defaultState = {
    email: '',
    password: '',
    nationality: '',
  };

export const SignupPage = () => {
  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    setState((old) => {
      return { ...{old}, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(defaultState);
  }; // prevent the form from reloading when you submit your account

  return (
    <div className="form-outer-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={state.email}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={state.password}
          placeholder="Enter your password"
          required
        />
        <label htmlFor="select">Nationality:</label>
        <select value={state.nationality} onChange={handleChange}>
          <option>ENG</option>
          <option>DE</option>
          <option>FR</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
      
      <div className="message-container">
        {state.nationality === 'en' && <p>Hello</p>}
        {state.nationality === 'de' && <p>Hallo</p>}
        {state.nationality === 'fr' && <p>Bonjour</p>}

        <p>Your email is {state.email}</p>
      </div>
    </div>
  );
};
