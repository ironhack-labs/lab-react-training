import React, { Component } from 'react';
import { Button, Label, Input, Form, FormGroup, Container,FormFeedback } from 'reactstrap';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '', // Initial value
      password: '', // Initial value
      nationality: 'de',  // Initial value
      description: 'Your description'
    }

    // Bind the necessary methods
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  isEmailCorrect() {
    // // Naive solution
    // return this.state.email.includes('@') && this.state.email.length >= 5

    // Solution from StackOverflow
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }

  isStrongPassword() {
    return this.state.password.length >= 7
  }

  handleSubmit(e) {
    // Stop the default behavior = stop the form submission
    e.preventDefault()
    alert(`Email: ${this.state.email} - Password: ${this.state.password}`)
  }
  
  render() {
return (
  <div className="Signup">
    <Container>
      {/* onSubmit is triggered when a user clicks on a button inside the form */}
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          {/* The input always display the value this.state.email */}
          {/* When the user changes the input, this.handleChange is triggered, it will change this.state.email  */}
          <Input 
            value={this.state.email} 
            onChange={e=>this.handleChange(e)} 
            valid={this.isEmailCorrect()}
            invalid={this.state.email.length > 0 && !this.isEmailCorrect()}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="alice@acme.com" />
          {/* The feedback is displayed when the input is valid */}
          <FormFeedback valid>You typed a valid email</FormFeedback>
          {/* The feedback is displayed when the input is invalid */}
          <FormFeedback>You typed an invalid email</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          {/* For any input, add: value, onChange, name */}
          <Input 
            value={this.state.password}
            onChange={e=>this.handleChange(e)}
            valid={this.isStrongPassword()}
            invalid={this.state.password.length > 0 && !this.isStrongPassword()}
            type="password"
            name="password"
            id="examplePassword" />
          <FormFeedback>Your password is too weak</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Nationality</Label>
          <Input value={this.state.nationality} onChange={e=>this.handleChange(e)} type="select" name="nationality" id="exampleSelect">
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </Input>
        </FormGroup>
        <FormGroup>
          {/* Renders: */}
          {/* <button class="btn btn-outline-primary">Enter</button> */}
          <Button 
            color="primary" 
            disabled={!this.isEmailCorrect() || !this.isStrongPassword()}>
            Sign up
          </Button>
        </FormGroup>
      </Form>
      <hr/>
      <p>
        {/* Display 'Hello', 'Hallo' or 'Bonjour' */}
        {this.state.nationality === 'en' && 'Hello'}
        {this.state.nationality === 'de' && 'Hallo'}
        {this.state.nationality === 'fr' && 'Bonjour'}
      </p>
      <p>Your email address is: {this.state.email}</p>
      <p>Your email address is {this.isEmailCorrect() ? 'correct' : 'wrong'}</p>
    </Container>
  </div>
);
  }
}

export default Signup;
