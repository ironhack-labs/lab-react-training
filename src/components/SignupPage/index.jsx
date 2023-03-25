import React, { useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import Greetings from '../Greetings';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('');
  const [inputValues, setInputValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {}
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!lang) {
      newErrors.lang = 'lang is required';
    }

    setErrors(newErrors);

  }, [email, lang, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0 ) {
      setIsValid(true)
      const valuesText = { email, password, lang };

      setInputValues(valuesText);
    } else {
      setIsValid(false)
    }
  };

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const handleChangeLang = (event) => setLang(event.target.value);

  
  return (
    <div className="SignupPage">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            id="Email"
            name="email"
            placeholder="Write your email"
            type="email"
            onChange={handleChangeEmail}
          />
        </FormGroup>
        {errors.email && <div>{errors.email}</div>}
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            id="Password"
            name="password"
            placeholder="Write your password"
            type="password"
            onChange={handleChangePassword}
          />
        </FormGroup>
        {errors.password && <div>{errors.password}</div>}
        <FormGroup>
          <Label for="Select">Select</Label>
          <Input
            id="Select"
            name="select"
            type="select"
            onChange={handleChangeLang}
          >
            <option value="en">en</option>
            <option value="es">es</option>
            <option value="fr">fr</option>
          </Input>
        </FormGroup>
        {errors.lang && <div>{errors.lang}</div>}

        <Button type="submit">Submit</Button>
      </Form>
      {Object.keys(inputValues).length !== 0 && (
        <Greetings
          lang={inputValues.lang}
          email={inputValues.email}
        ></Greetings>
      )}
    </div>
  );
};

    // const validSignUp = () => {
    //   let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  
    //   if (!email && regex.test(email)) {
    //     const updatedValue ={ email: 'Please enter a valid email' }
  
    //     set(messageError=> ({ ...messageError, ...updatedValue }));
    //     setIsInValid(true);
    //   } else if (!password) {
    //     setMessageError({ password: 'The password is too weak' });
    //     setIsInValid(true);
    //   } else if (!lang) {
    //     setMessageError({ lang: 'Please enter a nationality' });
    //     setIsInValid(true);
    //   }
    //   console.log(messageError.email, "UHBAJ");
    // };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   validSignUp();
    //   if (messageError.email === null && messageError.password === null && messageError.lang === null ) {
    //     console.log(messageError.email);
    //     setIsValid(true);
    //     console.log(isValid, "hola");
  
    //   } else  if (messageError.email.length !== 0 || messageError.password.length !== 0 ||  messageError.lang.length !== 0){
    //     setIsValid(false);
    //     console.log(messageError.email);
    //   }
    //   console.log(isValid);
    // };