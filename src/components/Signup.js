import React from 'react';
import { useState } from 'react';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const [nationality, setNationality] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ marginTop: '100px', marginBottom: '100px' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          width: '500px',
        }}
        onSubmit={submitHandler}
      >
        <label for="email">Email</label>
        <input type="email" value={email} />

        <label for="password">Password</label>
        <input type="password" value={password} />

        <label
          for="nationality"
          style={{ alignSelf: 'center', marginTop: '20px' }}
        >
          Nationality
        </label>
        <select
          value={nationality}
          style={{ width: '200px', alignSelf: 'center' }}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        <button
          type="submit"
          style={{ width: '200px', alignSelf: 'center', marginTop: '20px' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
