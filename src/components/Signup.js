import React from 'react';
import { useState } from 'react';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [greet, setGreet] = useState('');
  const [user, setUser] = useState();

  const [isPass, setPass] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const emailHandler = (e) => {
    const email = document.querySelector('.input-email');
    if (e.target.value.includes('@') && e.target.value.length > 10) {
      email.style.border = '4px solid lightgreen';
      setIsEmail(true);
    } else {
      email.style.border = '4px solid salmon';
    }
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    const password = document.querySelector('.input-pass');
    if (e.target.value.length > 8) {
      password.style.border = '4px solid lightgreen';
      setPass(true);
    } else {
      password.style.border = '4px solid salmon';
    }
    setPassword(e.target.value);
  };

  const nationalityHandler = (e) => {
    if (e.target.value === 'en') {
      setNationality('en');
      setGreet('Hello');
    }
    if (e.target.value === 'de') {
      setNationality('de');
      setGreet('Hallo');
    }
    if (e.target.value === 'fr') {
      setNationality('fr');
      setGreet('Bonjour');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please insert valid email and password!');
      return;
    }

    const userData = { email, greet };
    setUser(userData);

    document.querySelector('.input-pass').style.border = '1px solid black';
    document.querySelector('.input-email').style.border = '1px solid black';

    setEmail('');
    setPassword('');
    setNationality('');
    setGreet('');
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
        <input
          type="email"
          value={email}
          onChange={emailHandler}
          className="input-email"
        />
        {!isEmail ? (
          <p style={{ color: 'red' }}>
            <small>your email is invalid</small>
          </p>
        ) : (
          <p style={{ color: 'green' }}>
            <small>your email is valid</small>
          </p>
        )}

        <label for="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={passwordHandler}
          className="input-pass"
        />
        {!isPass ? (
          <p style={{ color: 'red' }}>
            <small>your password is weak</small>
          </p>
        ) : (
          <p style={{ color: 'green' }}>
            <small>your password is acceptable</small>
          </p>
        )}

        <label
          for="nationality"
          style={{ alignSelf: 'center', marginTop: '20px' }}
        >
          Nationality
        </label>
        <select
          value={nationality}
          style={{ width: '200px', alignSelf: 'center' }}
          onChange={nationalityHandler}
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

      <div>
        {user && (
          <>
            <p>{user.greet}</p>
            <p>Your email is: {user.email}</p>
            <p>Your email adress is correct</p>
          </>
        )}
      </div>
    </div>
  );
};
