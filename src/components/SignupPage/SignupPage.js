import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [submit, setSumbit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSumbit(false);
    if (name === 'email') setEmail(value);
    else if (name === 'pass') setPassword(value);
    else setNationality(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSumbit(true);
  };

  const greetings = {
    English: 'Hello',
    French: 'Salut',
    German: 'Hallo',
  };

  return (
    <section>
      <form action="" onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="email"></label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@email.com"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="pass"></label>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Password123$"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="nationality"></label>
        <select
          name="nationality"
          id="nationality"
          value={nationality}
          onChange={handleChange}
        >
          <option value="German">German</option>
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
        <button type="submit">Signup</button>
      </form>
      {submit && (
        <article>
          <p>{greetings[nationality]}</p>
          <p>Your email is {email}</p>
        </article>
      )}
    </section>
  );
};

export default SignupPage;
