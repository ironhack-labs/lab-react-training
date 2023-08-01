import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [newProfile, setNewProfile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      email: email,
      password: password,
      nationality: nationality,
    };

    setNewProfile(newEntry);
    setEmail('');
    setPassword('');
    setNationality('');
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid black',
          width: '400px',
          margin: '60px',
        }}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <p>Email:</p>
            <div style={{ width: '400px' }}>
              <input
                value={email}
                type="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <p>Password:</p>
            <div style={{ width: '400px' }}>
              <input
                value={password}
                type="text"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <p>Nationality</p>
            <select
              onChange={(event) => {
                setNationality(event.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </select>
            <br />
            <button type="submit">Sign up</button>
          </form>

          <p>
            {newProfile.nationality === 'fr'
              ? 'Bonjour'
              : newProfile.nationality === 'de'
              ? 'Hallo'
              : 'Hello'}
            !
          </p>
          <p>Your email is {newProfile.email}</p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
