import React, { useState, useEffect } from 'react';
import './SignupPage.css';

const handleChange = (e, form, setForm) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

const hello = (nationality) => {
  switch (nationality) {
    case 'en':
      return 'Hello';
    case 'de':
      return 'Hallo';
    case 'fr':
      return 'Bonjour';
    default:
      return '';
  }
};

const validateForm = (form, error, setError) => {
  const formInvalidation = {
    email: [
      {
        invalidation: form.email.length < 1,
        errorMessage: 'Required field!',
      },
      {
        invalidation: form.email.length < 4,
        errorMessage: 'Minimum of 3 characters!',
      },
      {
        invalidation: form.email.length > 30,
        errorMessage: 'Maximum of 30 characters!',
      },
    ],
    password: [
      {
        invalidation: form.password.length < 1,
        errorMessage: 'Required field!',
      },
      {
        invalidation: form.password.length < 4,
        errorMessage: 'Weak password!',
      },
      {
        invalidation: form.password.length > 30,
        errorMessage: 'Maximum of 30 characters!',
      },
    ],
  };

  const newErrors = { email: '', password: '' };
  Object.keys(formInvalidation).forEach((key) => {
    formInvalidation[key].find((situation) => {
      if (situation.invalidation) {
        newErrors[key] = situation.errorMessage;
        return true;
      } else return false;
    });
  });

  Object.assign(error, newErrors);

  setError({ ...newErrors });
};

const handleSubmit = (e, error, setForm) => {
  e.preventDefault();

  if (Object.keys(error).some((key) => error[key])) {
    return;
  }
  window.alert('FORM SUBMITED!');
  setForm({
    email: '',
    password: '',
    nationality: 'en',
  });
};

const SignupPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    nationality: 'en',
  });

  const [touched, setTouched] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    validateForm(form, error, setError);
  }, [form]);

  return (
    <div className="signup-page-container">
      <form
        onSubmit={(e) => handleSubmit(e, error, setForm)}
        className="signup-page-form"
      >
        <label htmlFor="email">Email</label>
        <input
          value={form.email}
          onChange={(e) => handleChange(e, form, setForm)}
          className={
            touched.email &&
            (error.email ? 'incorrect-sinup-border' : 'correct-sinup-border')
          }
          name="email"
          id="email"
          type="email"
          placeholder="email"
          onBlur={(e) => setTouched({ ...touched, [e.target.name]: true })}
        />
        <span
          className={
            error.email ? 'incorrect-sinup-span' : 'correct-sinup-span'
          }
        >
          {touched.email && (error.email || 'Ok')}
        </span>
        <label htmlFor="password">Password</label>
        <input
          value={form.password}
          onChange={(e) => handleChange(e, form, setForm)}
          className={
            touched.password &&
            (error.password ? 'incorrect-sinup-border' : 'correct-sinup-border')
          }
          name="password"
          id="password"
          type="password"
          placeholder="password"
          onBlur={(e) => setTouched({ ...touched, [e.target.name]: true })}
        />
        <span
          className={
            error.password ? 'incorrect-sinup-span' : 'correct-sinup-span'
          }
        >
          {touched.password && (error.password || 'Ok')}
        </span>
        <label htmlFor="nationality">Nationality</label>
        <select
          value={form.nationality}
          onChange={(e) => handleChange(e, form, setForm)}
          name="nationality"
          id="nationality"
        >
          <option value="de">German</option>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
        <button className="signup-button">Submit</button>
      </form>
      <div className="signup-result-container">
        {touched.email && <h1>{hello(form.nationality)}</h1>}
        {form.email && <h2>Your e-mail adress is: {form.email}</h2>}
        {touched.email && (
          <h2>Your e-mail adress is {error.email ? 'wrong!' : 'correct!'}</h2>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
