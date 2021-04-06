import React, { useState } from 'react';
import './../styles/iteration15.css';

function SignupPageHook() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    nationality: 'EN',
  });
  const {email, password, nationality} = user ;


  const [isSubmit, setIsSubmit] = useState(false);

  const handlegetValue = (event) => {
    if (!isSubmit) {
      setUser({ ...user, [event.target.name]: event.target.value });
    }
  };

  const renderWelcomeMessage = (event) => {
    event.preventDefault();
    setUser({
      email: isSubmit ? '' : email,
      password: isSubmit ? '' : password,
      nationality: isSubmit ? 'EN' : nationality,
    });
    setIsSubmit(!isSubmit);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return password.match(regex);
  };

  return (
    <div className="SignupPage__container">
      <form
        action=""
        className="SignupPage__form"
        onSubmit={renderWelcomeMessage}
      >
        <div>
          <label htmlFor="email">Email</label>
          <div className="SignupPage__input">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handlegetValue}
              value={email}
              style={{
                borderColor: validateEmail(email) ? 'green' : 'red',
                outline: 'none',
              }}
            />
            <div>
              {validateEmail(email) && (
                <p style={{ color: 'green' }}>Valid email</p>
              )}{' '}
              {validatePassword(password) && (
                <p style={{ color: 'green' }} Valid Password></p>
              )}
              {!validateEmail(email) && (
                <p style={{ color: 'red' }}>Invalid email</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="SignupPage__input">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlegetValue}
              value={password}
              style={{
                borderColor: validatePassword(password) ? 'green' : 'red',
                outline: 'none',
              }}
            />
            <div>
              {validatePassword(password) && (
                <p style={{ color: 'green' }}>Valid Password</p>
              )}{' '}
              {validatePassword(password) && (
                <p style={{ color: 'green' }} Valid Password></p>
              )}
              {!validatePassword(password) && (
                <p style={{ color: 'red' }}>Invalid Password</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="nationality">Nationality</label>
          <select
            type="text"
            id="nationality"
            name="nationality"
            onChange={handlegetValue}
            value={nationality}
          >
            <option value="EN">EN</option>
            <option value="ES">ES</option>
            <option value="FR">FR</option>
          </select>
        </div>
        <button>
          {isSubmit && 'Hide'}
          {!isSubmit && 'Submit'}
        </button>
      </form>
      <div>
        {isSubmit && (
          <div>
            <p>
              {nationality === 'EN' && 'Hello !'}
              {nationality === 'ES' && 'Hola !'}
              {nationality === 'FR' && 'Bonjour !'}
            </p>
            <p>Your email is {email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignupPageHook;
