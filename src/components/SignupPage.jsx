import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const dic = { en: 'Hello', de: 'Hallo', fr: 'Bonjour' };

function validateEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}

function SignupPage(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nationality, setNationality] = React.useState('');

  return (
    <div id="signupPage">
      <label>
        Email
        <input
          style={{ borderColor: validateEmail(email) ? 'green' : 'red' }}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password (at least 8 characters including at least one captial letter,
        one number and one puntuation)
        <input
          style={{ borderColor: validatePassword(password) ? 'green' : 'red' }}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label htmlFor="">
        Nationality
        <select
          value="nationality"
          onChange={(event) => setNationality(event.target.value)}
          name=""
          id=""
        >
          <option value="en">EN</option>
          <option value="de">DE</option>
          <option value="fr">FR</option>
        </select>
      </label>
      <p>{dic[nationality]}</p>
      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
