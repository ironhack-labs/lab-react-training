import { useState } from 'react';
import classes from './SignupPage.module.css';

const SignupPage = () => {
  const initialState = {
    email: '',
    password: '',
    nationality: '',
  };
  const [userState, setUserState] = useState(initialState);
  const [signedUpUsers, setSignedUpUsers] = useState([]);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [greetingText, setGreetingText] = useState('');

  const onChangeHandler = ({ target }) => {
    setIsEmailValid(true);
    setIsPasswordValid(true);
    setUserState((userState) => {
      return { ...userState, [target.name]: target.value };
    });
  };
  console.log(userState);
  console.log(signedUpUsers);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(password);
  };

  let greeting = '';
  switch (userState.nationality) {
    case 'en':
      greeting = 'Hi!';
      break;
    case 'fr':
      greeting = 'Bonjour!';
      break;
    case 'de':
      greeting = 'Tschusss!';
      break;
    case 'hu':
      greeting = 'Szia Uram!';
      break;
    default:
      greeting = 'Hello!';
      break;
  }

  const onSubmitHandler = () => {
    if (
      validateEmail(userState.email) &&
      validatePassword(userState.password)
    ) {
      setGreetingText(
        `${greeting} Your email is ${userState.email}. Your email is correct.`
      );
      setSignedUpUsers((signedUpUsers) => signedUpUsers.concat(userState));
      setUserState(initialState);
      setIsEmailValid(true);
      setIsPasswordValid(true);
    } else {
      if (!validateEmail(userState.email)) {
        setIsEmailValid(false);
      }
      if (!validatePassword(userState.password)) {
        setIsPasswordValid(false);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@email.com"
          onChange={onChangeHandler}
          value={userState.email}
          className={isEmailValid ? '' : classes.invalid}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          value={userState.password}
          className={isPasswordValid ? '' : classes.invalid}
        />
        <label htmlFor="nationality">Nationality</label>
        <select
          name="nationality"
          id="nationality"
          onChange={onChangeHandler}
          value={userState.nationality}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
          <option value="hu">Hungarian</option>
        </select>
        <button type="submit" onClick={onSubmitHandler}>
          Sign Up
        </button>
      </form>
      <p>{greetingText}</p>
    </div>
  );
};

export default SignupPage;
