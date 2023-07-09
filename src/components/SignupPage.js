import React, { useState } from 'react';

export default function SignupPage() {
  const [userDetails, setUserDetails] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nationality: '',
  });

  const handleChange = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserDetails([...userDetails, formData]);

    setFormData({
      email: '',
      password: '',
      nationality: '',
    });
  };

  const displayMessage = () => {
    return userDetails.length ? (
      userDetails.map((user, i) => (
        <div key={i}>
          <p>{user.nationality === 'en' ? 'Hello' : ''}</p>
          <p>{user.nationality === 'de' ? 'Hallo' : ''}</p>
          <p>{user.nationality === 'en' ? 'Bonjour' : ''}</p>
          <p>Your email address is: {user.email}</p>
        </div>
      ))
    ) : (
      <p>Please sign up</p>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="nationality">Nationality</label>
        <select
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        >
          <option value="">--Choose a language--</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
          <option value="fr">FR</option>
        </select>

        <button>Sign Up</button>
      </form>
      {displayMessage()}
    </>
  );
}
