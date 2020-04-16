import React, { Component } from 'react'
import Greetings from './Greetings'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SignupPage extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      validEmail: false,
      password: '',
      validPassword: false,
      nationality: ''
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password){
    var re = /.{8}/
    console.log(re)
    return re.test(String(password).toLowerCase());
  }

  handleInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })

    if(e.target.name === 'email' && this.validateEmail(e.target.value)) this.setState({validEmail: true}) 
    if(e.target.name === 'password' && this.validatePassword(e.target.value)) this.setState({validPassword: true}) 

  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input valid={this.state.validEmail} onChange={this.handleInput} type="email" name="email" id="email" placeholder="bob@marley.com" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input invalid={this.state.password.length > 0 && !this.state.validPassword} valid={this.state.validPassword} onChange={this.handleInput}  type="password" name="password" id="password" placeholder="······" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" onChange={this.handleInput} name="nationality" id="nationality">
              <option value=""></option>
              <option value="en">England</option>
              <option value="de">Deutsch</option>
              <option value="fr">France</option>
            </Input>
          </FormGroup>
          <Button outline color="primary">Sign Up</Button>{' '}
        </Form>
        {this.state.nationality && <Greetings lang={this.state.nationality}> </Greetings>}
         <p>Your email is {this.state.validEmail ? 'correct': 'incorrect'} </p>
      </div>
    )
  }
}
