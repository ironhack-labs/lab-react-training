import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormFeedback
} from 'reactstrap';

export class SignupPage extends Component {
  constructor(props){
    super(props);

    this.state = { 
      formControls: {
      email: {
        value: ''
      },
      password: {
        value: ''
      }
    },
      nationality: {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
      },
      showData: false,
      validate: {
        emailState: '',
        passwordState: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit = (e) =>{
  e.preventDefault();
    this.setState({
      showData: true
    });
}
handleChange = (e) =>{
  let name = e.target.name;
  let value = e.target.value;
  
  this.setState({
    formControls: {
        ...this.state.formControls,
        [name]: {
        ...this.state.formControls[name],
        value
      }
    }
  });
}
validateEmail(e) {
  const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRex = /(?=.*[0-9])/;
  const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
  }
  validatePassword(e) {
    const passwordRex = /(?=.*[0-9])/;
    const { validate } = this.state
      if (passwordRex.test(e.target.value) && e.target.value.length >= 8) {
        validate.passwordState = 'has-success'
      } else {
        validate.passwordState = 'has-danger'
      }
      this.setState({ validate })
    }

  render() {
    return (
      <Container className="signup-form">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" value={this.state.formControls.email.value} onChange={ (e) => {this.validateEmail(e); this.handleChange(e)} } valid={ this.state.validate.emailState === 'has-success' } invalid={ this.state.validate.emailState === 'has-danger' } />
            <FormFeedback valid>
              You typed a valid email
            </FormFeedback>
            <FormFeedback invalid>
              Uh oh! Looks like there is an issue with your email. Please input a correct email.
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="password" value={this.state.formControls.password.value} onChange={ (e) => {this.validatePassword(e); this.handleChange(e)} } valid={ this.state.validate.passwordState === 'has-success' } invalid={ this.state.validate.passwordState === 'has-danger' } />
            <FormFeedback valid>
              your password is strong
            </FormFeedback>
            <FormFeedback invalid>
              Your password is too weak
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Nationality</Label>
            <Input type="select" name="nationality">
              <option value={this.state.nationality.en}>English</option>
              <option value={this.state.nationality.de}>German</option>
              <option value={this.state.nationality.es}>Spanish</option>
              <option value={this.state.nationality.fr}>French</option>
            </Input>
          </FormGroup>
          <Button onClick={this.handleSubmit}>Sign up</Button>
      </Form>
      <hr />
      {this.state.showData && <h2>{this.state.nationality}</h2>}
      {this.state.showData && <h2>Your email address is: {this.state.formControls.email.value}</h2>}
      </Container>
    )
  }
}

export default SignupPage
