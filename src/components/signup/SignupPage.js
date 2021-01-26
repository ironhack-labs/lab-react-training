import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export class SignupPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            nationality: '',
            filledForm: false
        }
    }

    handleChange = (e) => {
        const propertyName = e.target.name

        console.log('Handle change')

        this.setState({
            [propertyName]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const filledForm = !this.state.filledForm

        this.setState({
            filledForm: filledForm
        })
    }

    render() {
        let language = ''
        switch (this.state.nationality) {
            case "English":
                language = "Hallo";
              break;
            case "German":
                language = "Hello";
              break;
            case "French":
                language = "Bonjour";
              break;
            default:
                language = "Hello";
          }

        return (
            <div style={{width: '50%'}}>
                <Form>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type='email' name='email' placeholder='Your email' onChange={this.handleChange} value={this.state.email}/>
                    </FormGroup>

                    <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' name='password' placeholder='******' onChange={this.handleChange} value={this.state.password}/>
                    </FormGroup>

                    <FormGroup>
                    <Label>Nationality</Label>
                    <Input type='select' name='nationality' onChange={this.handleChange} value={this.state.nationality}>
                        <option value='en'>English</option>
                        <option value='de'>German</option>
                        <option value='fr'>French</option>
                    </Input>
                    </FormGroup>

                    <Button onClick={this.handleFormSubmit} color="primary">Sign up</Button>
                </Form>
                <hr />
                <p>{language}</p>
                <p>Your email address is: {this.state.filledForm ? this.state.email : ''}</p>
                <p>Your email address is {}</p>
            </div>
        )
    }
}


export default SignupPage
