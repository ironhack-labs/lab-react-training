import { useState } from 'react';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { FormFeedback } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';

function SignupPage() {
  const greetings = { English: 'Hello', German: 'Hallo', French: 'Bonjour' };

  const [state, setState] = useState({
    email: '',
    password: '',
    nationality: 'English',
    emailValid: false,
    emailInvalid: false,
    passwordValid: false,
    passowrdInvalid: false,
  });

  function validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    }
    return true;
  }

  function handleChange(event) {
    let email = {
      emailValid: state.emailValid,
      emailInvalid: state.emailInvalid,
    };
    if (event.target.name === 'email' && event.target.value !== '') {
      email.emailValid = validateEmail(event.target.value);
      email.emailInvalid = !validateEmail(event.target.value);
    }

    let password = {
      passwordValid: state.passwordValid,
      passwordInvalid: state.passowrdInvalid,
    };
    if (event.target.name === 'password' && event.target.value !== '') {
      password.passwordValid = validatePassword(event.target.value);
      password.passwordInvalid = !validatePassword(event.target.value);
    }

    setState({
      ...state,
      [event.target.name]: event.target.value,
      ...email,
      ...password,
    });
  }

  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="with a placeholder"
          type="email"
          onChange={handleChange}
          valid={state.emailValid}
          invalid={state.emailInvalid}
        />
        <FormFeedback valid>You typed a valid email</FormFeedback>
        <FormFeedback invalid>You typed an invalid email</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          id="password"
          name="password"
          placeholder="password placeholder"
          type="password"
          onChange={handleChange}
          valid={state.passwordValid}
          invalid={state.passwordInvalid}
        />
        <FormFeedback valid>Your password is valid</FormFeedback>
        <FormFeedback invalid>Your password is too weak</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="select">Nationality</Label>
        <Input
          id="select"
          name="nationality"
          type="select"
          onChange={handleChange}
        >
          <option>English</option>
          <option>German</option>
          <option>French</option>
        </Input>
      </FormGroup>
      <Button>Submit</Button>
      <hr />
      <p>{greetings[state.nationality]}</p>
      <p>Your email address is: {state.email}</p>
      <p>{state.emailValid ? 'Your email address is correct' : ''}</p>
    </Form>
  );
}

export default SignupPage;
