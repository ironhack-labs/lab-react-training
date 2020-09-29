import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: '',
    isSubmitted: false
  };

  handleOnChange = (ev) => {
    ev.preventDefault();

    const { target } = ev;

    this.setState({
      [target.name]: target.value
    });
  };

  signup = () => {
    this.setState({
      isSubmitted: true
    });
  };

  render() {
    const { email, password, nationality, isSubmitted } = this.state;
    const messages = {
      en: 'Hello',
      fr: 'Salut',
      de: 'Hallo'
    }

    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="with a placeholder" value={email}
                   onChange={this.handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="password placeholder" value={password}
                   onChange={this.handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for="nationality">Select</Label>
            <Input type="select" name="nationality" id="nationality" value={nationality} onChange={this.handleOnChange}>
              <option selected>Select nationality</option>
              <option>en</option>
              <option>de</option>
              <option>fr</option>
            </Input>
          </FormGroup>
          <Button onClick={this.signup}>Sign Up</Button>
        </Form>
        {isSubmitted &&
        <div>
          <p>{messages[nationality]}</p>
          <p>Your email address is: {email}</p>
          <p>Your email address is correct</p>
        </div>
        }
      </div>
    );
  }
}

export default SignupPage;