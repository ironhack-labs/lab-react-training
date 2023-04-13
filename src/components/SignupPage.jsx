import React, { useState } from 'react';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('');

  const handleChange = (ev) => {
    const value = ev.target.value;
    setEmail(value);
  };

  const onOptionChange = (ev) => {
    const optionValue = ev.target.value;
    switch (optionValue) {
      case 'fr':
        return setOption('Bonjour');
      case 'de':
        return setOption('Hallo');
      default:
        return setOption('Hello');
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="mb-5 w-50">
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            onChange={handleChange}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <div className="mb-2">Nationality</div>
          <select
            className="form-control"
            onChange={onOptionChange}
            name="nationality"
            id="nationality"
          >
            <option value="">---</option>
            <option value="en">English</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
          </select>
        </div>
        <button className="btn btn-primary mb-3">Sign Up</button>
      </form>
      <p>{option}</p>
      <p>Your email is: {email}</p>
    </div>
  );
}

export default SignUpPage;
