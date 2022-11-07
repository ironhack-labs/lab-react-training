import { useEffect } from 'react';
import { useState } from 'react';

function SignupPage() {
  const defaultState = {
    email: '',
    password: '',
    nationality: '',
  };

  const [state, setState] = useState(defaultState);

  function handleChange(event) {
    console.log('VALUE: ', event.target.value);
    console.log('NAME: ', event.target.name);
    console.log(state.nationality);
    console.log(typeof state.nationality);
    setState((old) => {
      return { ...old, [event.target.name]: event.target.value };
    });
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isStrongPassword(password) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(password);
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <form className="signUpForm">
        <label>E-Mail: </label>
        <input
          name="email"
          value={state.email}
          onChange={handleChange}
          type="email"
          style={
            isValidEmail(state.email)
              ? { backgroundColor: 'green' }
              : { backgroundColor: 'red' }
          }
        />
        {isValidEmail(state.email) && (
          <p style={{ color: 'green' }}>You typed a valid email</p>
        )}
        {!isValidEmail(state.email) && (
          <p style={{ color: 'red' }}>Please type a valid email</p>
        )}
        <label>Password: </label>
        <input
          name="password"
          value={state.password}
          onChange={handleChange}
          type="password"
          style={
            isStrongPassword(state.password)
              ? { backgroundColor: 'green' }
              : { backgroundColor: 'red' }
          }
        />
        {isStrongPassword(state.password) && (
          <p style={{ color: 'green' }}>You typed a strong password</p>
        )}
        {!isStrongPassword(state.password) && (
          <p style={{ color: 'red' }}>
            Please type a password that is at least 6 characters long and
            contains an uppercase letter, a lowercase letter and a number
          </p>
        )}
        <label>
          Nationality:
          <select
            name="nationality"
            value={state.nationality}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </label>
        <button type="submit">Sign Up</button>
      </form>

      {state.nationality === 'en' && <p>Hello</p>}
      {state.nationality === 'de' && <p>Hallo</p>}
      {state.nationality === 'fr' && <p>Bonjour</p>}

      <p>Your email is {state.email}</p>
    </div>
  );
}

export default SignupPage;
