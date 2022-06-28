import React, { useEffect } from 'react';
import { useState } from 'react';

import './SignupPage.css'

export default function SignupPage() {
  const [fields, setFields] = useState({
    email: '',
    password: '',
    nationality: '',
  });
  const [validity, setValidity] = useState({
    email: 0,
    password: 0,
    nationality: 0,
  });

  useEffect(() => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    console.log('match', fields.email.match(regex));
    if (fields.email.match()) {
    }

    //console.log('password---->', fields.password.match(/[a-z]/).length);
    //contains lowerCase, upperCase, number, special character and >6 characters
    if (
      fields.password.length > 6 &&
      fields.password.match(/[a-z]/) &&
      fields.password.match(/[A-Z]/) &&
      fields.password.match(/[0-9]/) &&
      fields.password.match(/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/)
    ) {
      setValidity({...validity,password:2})
      console.log('pass valid ! ')
    }else{
      setValidity({...validity,password:1})
    }
  }, [fields]);

  const handleFields = (event) => {
    console.log(event.target.name);
    setFields({ ...fields, [event.target.name]: event.target.value });
    console.log(fields);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={(e) => {
            handleFields(e);
          }}
        />
        
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={(e) => {
            handleFields(e);
          }}
        />
        {validity.password === 1 && <p className="invalid">Your email is not valid</p>}
        {validity.password === 2 && <p className="valid">You typed a valid mail</p>}
        
      </div>
      <div>
        <label htmlFor="nationality">Nationality</label>
        <select
          name="nationality"
          className="form-control form-control-lg"
          onChange={(e) => {
            handleFields(e);
          }}
        >
          <option value="de">German</option>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Sigh Up
      </button>
    </form>
  );
}
