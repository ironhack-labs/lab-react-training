import React from 'react';

function SignupPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nationality, setNationality] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="signupForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" onChnage={handleEmailChange}></input>
        <label>Password</label>
        <input type="password" onChnage={handlePasswordChange}></input>
        <label>Nationality</label>
        <select onChnage={handleNationalityChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SignupPage;
