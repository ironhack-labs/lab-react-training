import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
  Container,
} from 'reactstrap';

const langs = {
  de: 'Hallo',
  fr: 'Bonjour',
  es: 'Ola',
  en: 'Hello',
};

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: 'fr',
  };

  isEmailCorrect = () => {
    const checkEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(String(this.state.email).toLowerCase());
  };

  isStrongPwd = () => {
    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    // const pwd =
    //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,10}$';
    // return pwd.test(String(this.state.password).toLowerCase());

    return this.state.password.length >= 5;
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email: </Label>
            <Input
              onChange={(e) => this.handleChange(e)}
              value={this.state.email}
              invalid={this.state.email.length > 0 && !this.isEmailCorrect()}
              valid={this.isEmailCorrect()}
              type="email"
              id="email"
              name="email"
            />

            <FormFeedback invalid="true">Invalid email</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              onChange={(e) => this.handleChange(e)}
              value={this.state.password}
              invalid={this.state.password.length > 0 && !this.isStrongPwd()}
              valid={this.state.password.length > 0 && this.isStrongPwd()}
              type="password"
              id="password"
              name="password"
            ></Input>

            <FormFeedback invalid="true">
              Please choose a stronger password.
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="nationality">Nationality:</Label>
            <Input
              onChange={this.handleChange}
              value={this.state.nationality}
              name="nationality"
              id="nationality"
              type="select"
            >
              <option value="es">es</option>
              <option value="en">en</option>
              <option value="de">de</option>
              <option value="fr">fr</option>
            </Input>
          </FormGroup>

          <Button color="primary">Sign up</Button>
        </Form>
        <hr />
        <p>{langs[this.state.nationality]}</p>
        {this.state.email.length > 3 && <p>Your email is {this.state.email}</p>}
        {this.state.email.length > 3 && (
          <p>
            {this.isEmailCorrect()
              ? 'Your email is valid.'
              : 'Your email is invalid.'}
          </p>
        )}
      </Container>
    );
  }
}

export default SignupPage;
