import React from 'react';

function SignupPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nationality, setNationality] = React.useState('');

  return (
    <div>
      <label>Email</label>
      <input></input>
      <label>Password</label>
      <input></input>
      <label>Nationality</label>
      <input></input>
      <submit>Sign up</submit>
    </div>
  );
}

export default SignupPage;
