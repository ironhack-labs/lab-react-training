import React, { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid = emailRegex.test(email);

  return (
    <div className="container">
      <form className="form-group">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`form-control ${isValid ? 'is-valid' : 'is-invalid'}`}
        />
        <input
          type="password"
          placeholder="password"
          className="form-control mt-3"
        />
        <select
          value={nationality}
          onChange={(event) => setNationality(event.target.value)}
          className="form-control mt-3"
        >
          <option value="">Select nationality</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button type="submit" className="btn btn-primary mt-3">
          Sign up
        </button>
      </form>

      <p> Hi, your email is {email}</p>
    </div>
  );
}

export default SignupPage;
