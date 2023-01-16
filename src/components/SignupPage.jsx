import { useState } from 'react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Nationality</label>
        <select
          name="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="french">French</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>
          {nationality === 'english' ? `Hello, your email is ${email}` : ''}
        </p>
        <p>
          {nationality === 'german'
            ? `Hallo, ihre E-Mail-Adresse ist ${email}`
            : ''}
        </p>
        <p>
          {nationality === 'french'
            ? `Bonjour, votre adresse e-mail est ${email}`
            : ''}
        </p>
      </div>
    </div>
  );
}
