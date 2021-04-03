import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';


export default class SignupPage extends Component {
    
    state = {
        email: '',
        password: '',
        nationality: '',
        greeting: '',
        emailCheck: '',
        submitted: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({submitted: true})
    }

    handleInputChange = (e) => {
        if (e.target.id === 'email') {
            this.setState({email: e.target.value})
            this.checkEmail(e.target.value)
        } else if (e.target.id === 'password') {
            this.setState({password: e.target.value});
        } else if (e.target.id === 'nationality') {
            this.setState({nationality: e.target.value});
            this.createGreeting(e.target.value)
        } else {}
    }

    validateEmail = (email) => {
        let schema = /\S+@\S+\.\S+/;
        return schema.test(email);
    }

    validatePassword = (password) => {
        let schema =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return schema.test(password);
    }

    checkEmail = (email) => {
        if (this.validateEmail(email) === true) {
            this.setState({emailCheck: 'correct'})
        } else {
            this.setState({emailCheck: 'incorrect'})
        }
    }

    createGreeting = (nationality) => {
        switch (nationality) {
            case 'England':
                this.setState({greeting: 'Hi'})
                break;
            case 'USA':
                this.setState({greeting: 'Hi'})
                break;
            case 'Malaysia':
                this.setState({greeting: 'Helo'})
                break;
            case 'Germany':
                this.setState({greeting: 'Hallo'})
                break;
            case 'Sweden':
                this.setState({greeting: 'Hej'})
                break;
            case 'Nigeria':
                this.setState({greeting: 'Hallo'})
                break;
            case 'Italy':
                this.setState({greeting: 'Ciao'})
                break;
            case 'Scotland':
                this.setState({greeting: 'Hi'})
                break;
            case 'Kazakhstan':
                this.setState({greeting: 'Сәлеметсіз бе'})
                break;
            case 'Russia':
                this.setState({greeting: 'Привет'})
                break;
            case 'Catalonia':
                this.setState({greeting: 'Hola'})
                break;
            case 'France':
                this.setState({greeting: 'Allo'})
                break;
            case 'Israel':
                this.setState({greeting: 'שלום'})
                break;
            case 'Brazil':
                this.setState({greeting: 'Olá'})
                break;
            case 'Taiwan':
                this.setState({greeting: '你好'})
                break;
            case 'Turkey':
                this.setState({greeting: 'Merhaba'})
                break;
            case 'Norway':
                this.setState({greeting: 'Hallo'})
                break;    
            default:
                break;
        }
    }

    render() {

        return (
            <>
            <Form onSubmit={this.onSubmit} className="mt-4 mb-4">
                <FormGroup>
                    <Label for="email">E-mail</Label>
                    <Input id="email" name="email" onChange={this.handleInputChange} className={ this.validateEmail(this.state.email) ? "is-valid" : "is-invalid" } required/>
                    <FormFeedback valid>Valid e-mail</FormFeedback>
                    <FormFeedback>Invalid e-mail</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" name="password" type="password" onChange={this.handleInputChange} className={ this.validatePassword(this.state.password) ? "is-valid" : "is-invalid" } required/>
                    <FormFeedback valid>Valid password</FormFeedback>
                    <FormFeedback>Invalid password</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="nationality">Country</Label>
                    <Input type="select" name="nationality" id="nationality" defaultValue="-- select your country --" onChange={this.handleInputChange} required>
                    <option disabled> -- select your country -- </option>
                    <option>England</option>
                    <option>USA</option>
                    <option>Malaysia</option>
                    <option>Germany</option>
                    <option>Sweden</option>
                    <option>Nigeria</option>
                    <option>Italy</option>
                    <option>Scotland</option>
                    <option>Kazakhstan</option>
                    <option>Russia</option>
                    <option>Catalonia</option>
                    <option>France</option>
                    <option>Israel</option>
                    <option>Brazil</option>
                    <option>Taiwan</option>
                    <option>Turkey</option>
                    <option>Norway</option>
                    </Input>
                </FormGroup>
                <Button className="my-2">Submit</Button>
            </Form>
            <div className={ this.state.submitted ? "" : "hidden" }>
            <h3>{this.state.greeting}!</h3>
            <h5>You have selected this e-mail address: {this.state.email}</h5>
            <p>This e-mail address is {this.state.emailCheck}.</p>
            </div>
            </>
        )
    }
}