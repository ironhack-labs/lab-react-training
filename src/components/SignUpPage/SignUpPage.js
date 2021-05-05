import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';

export default class SignUpPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: '',
    submitted: false,
  };

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({ submitted: true });
    // this.setState({
    //   email: '',
    //   password: '',
    //   narionality: '',
    //   submitted: false,
    // });
  };

  renderSubmit = () => {
    return (
      <>
        <p>Hello</p>
        <p>Your email address is: {this.state.email}</p>
      </>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Sign Up</h1>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email here"
              onChange={(e) => this.setState({ email: e.target.value })}
            />

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password here"
              onChange={(e) => this.setState({ password: e.target.value })}
            />

            <Label htmlFor="nationality">Nationality</Label>
            <Input
              type="select"
              name="nationality"
              id="nationality"
              onChange={(e) => this.setState({ nationality: e.target.value })}
            >
              <option>German</option>
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>Italian</option>
              <option>USA</option>
              <option>Canadian</option>
              <option>Chinese</option>
              <option>Japanese</option>
            </Input>
          </FormGroup>

          <Button>Sign Up</Button>
        </Form>

        {this.state.submitted && this.renderSubmit()}
      </div>
    );
  }
}
