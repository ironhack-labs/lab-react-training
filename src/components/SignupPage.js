import React from 'react';
import '../App.css';
import Greeting from './Greeting';

function SignupPage() {
  const [email, setEmail] = React.useState('Your email');
  const [password, setPassword] = React.useState('Your password');
  const [nationality, setNationality] = React.useState('Your nationality');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleNationalityChange(event) {
    setNationality(event.target.value);
  }

  function handleInputChange() {
    handleEmailChange();
    handlePasswordChange();
    handleNationalityChange();
  }

  return (
    <div>
      <form>
        <input name="email" placeholder="Your email" />
        <br />
        <input name="email" placeholder="Your email" value={email} />
        <input type="password" name="password" placeholder="Your password" />
        <br />
        <input type="select" name="nationality" placeholder="Your nationality">
          <option value="English" />
          <option value="French" />
          <option value="German" />
        </input>
        <button type="submit" onClick={handleInputChange}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
