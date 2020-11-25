import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from 'reactstrap';

const SignupPage = (props) => {
  let [isValid, setIsValid] = useState({ email: false, password: true });

  const isEmailOk = (e) => {
    const emaioRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emaioRegExp.test(e.target.value)) {
      setIsValid((isValid = { ...isValid, email: 'is-ok' }));
    } else {
      setIsValid((isValid = { ...isValid, email: 'is-wrong' }));
    }
  };

  const isPassOk = (e) => {
    if (e.target.value.length > 8) {
      setIsValid((isValid = { ...isValid, password: 'is-ok' }));
    } else {
      setIsValid((isValid = { ...isValid, password: 'is-wrong' }));
    }
  };
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="John@doe.com"
          onChange={isEmailOk}
          valid={isValid.email === 'is-ok'}
          invalid={isValid.email === 'is-wrong'}
        />
        <FormFeedback valid>¡Ese es un buen email!</FormFeedback>
        <FormFeedback invalid>¡Revisa tu email!</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="*********"
          onChange={isPassOk}
          valid={isValid.password === 'is-ok'}
          invalid={isValid.password === 'is-wrong'}
        />
        <FormFeedback valid>¡Esa contraseña está bien!</FormFeedback>
        <FormFeedback invalid>¡Pon una contraseña más larga!</FormFeedback>
      </FormGroup>
    </Form>
  );
};

export default SignupPage;
