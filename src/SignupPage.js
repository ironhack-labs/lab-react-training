import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

export class SignupPage extends Component {
    state={
        email:'',
        validEmail: false,
        password:'',
        validPassword:false,
        nacionality:'Hello',
        display:'none'
    }

    handleEmail = (e) => {
        const emailRex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        console.log(this.state);
        this.setState({email:e.target.value});
        if (emailRex.test(e.target.value)) {
            this.setState({validEmail:true})
          } else {
            this.setState({validEmail:false})
          }
    }
    handlePassword = (e) => {
        this.setState({password:e.target.value})
        if (e.target.value.length>5) {
            this.setState({validPassword:true})
          } else {
            this.setState({validPassword:false})
          }
    }
    handleNacionality = (e) => {
        console.log(e.value)
        this.setState({nacionality:e.target.value})
    }
    submitForm = () =>{
        this.setState({display:'block'})
    }

    render() {
        return (
            <div>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Valid input</Label>
                    <Input type='email' value={this.state.email} onChange={this.handleEmail}  valid={ this.state.validEmail} invalid={ !this.state.validEmail }/>
                    <FormFeedback valid>The email is valid</FormFeedback>
                    <FormFeedback invalid>The email is invalid</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Invalid input</Label>
                    <Input type='password' value={this.state.password} onChange={this.handlePassword} valid={ this.state.validPassword} invalid={ !this.state.validPassword } />
                    <FormFeedback valid>The password is too weak</FormFeedback>
                    <FormFeedback invalid>The password is strong</FormFeedback>
                </FormGroup>
                <Input type="select" name="nacionality" id="nacionality"  value={this.state.nacionality} onChange={this.handleNacionality}>
                    <option value="Hello">English</option>
                    <option value="Hallo">German</option>
                    <option value="Bonjour">French</option>
                </Input>
                <button onClick={()=>this.submitForm()}>Submit</button>
            </Form>
            <div style={{display:this.state.display}}>
                <p>{this.state.nacionality}</p>
                <p>Your email address is: {this.state.email}</p>
                <p>Your email address is correct</p>
            </div>
        </div>
        )
    }
}

export default SignupPage
