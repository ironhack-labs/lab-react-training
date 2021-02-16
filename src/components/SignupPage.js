import React from 'react';

const initialState = {
  email: '',
  password: '',
  nationality: '',
};

const borderColor = {
  email: 'grey',
  password: 'grey',
};

const show = {
  email: false,
  password: false,
};

const greeting = {
  en: 'Hello',
  de: 'Hallo',
  fr: 'Bonjoir',
};

const hasCorrectPassword = (password) => {
  const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/);
  return passwordRegex.test(password);
};

const hasCorrectEmail = (email) => {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return emailRegex.test(email);
};

function SignupPage() {
  const [formState, setFormState] = React.useState(initialState);
  const [formColor, setFormColor] = React.useState(borderColor);
  const [showState, setShowState] = React.useState(show);

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });

    let color = { ...formColor };
    let lettering = { ...show };

    if (target.name === 'email') {
      if (hasCorrectEmail(target.value)) {
        color = { ...color, email: 'green' };
        lettering = { ...lettering, email: true };
      } else {
        if (target.value === '') {
          color = { ...color, email: 'grey' };
          lettering = { ...lettering, email: false };
        } else {
          color = { ...color, email: 'red' };
          lettering = { ...lettering, email: false };
        }
      }
      setFormColor(color);
      setShowState(lettering);
    } else if (target.name === 'password') {
      if (hasCorrectPassword(target.value)) {
        color = { ...color, password: 'green' };
        lettering = { ...lettering, password: true };
      } else {
        if (target.value === '') {
          color = { ...color, password: 'grey' };
          lettering = { ...lettering, password: false };
        } else {
          color = { ...color, password: 'red' };
          lettering = { ...lettering, password: false };
        }
      }
      setFormColor(color);
      setShowState(lettering);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormState(initialState);
    setFormColor(borderColor);
    setShowState(show);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={ formState.email }
          style={{ borderColor: formColor.email }}
          onChange={handleChange}
        />
        <p style={{ color: 'green' }}>
          {showState.email && 'You typed a valid email'}
        </p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={formState.password}
          style={{ borderColor: formColor.password }}
          onChange={handleChange}
        />
        <p style={{ color: 'green' }}>
          {showState.password && 'You typed a valid password'}
        </p>
        <select name="nationality" id="nationality" onChange={handleChange}>
          <option selected disabled value="">
            Choose Language
          </option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <p>{greeting[formState.nationality]}</p>
      <p>Your email is: {formState.email}</p>
    </div>
  );
}

export default SignupPage;
