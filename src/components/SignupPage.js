import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';
import Greetings from './Greetings';

class SignupPage extends React.Component {
    state = {
        email: '',
        emailIsValid: false,
        password: '',
        passwordIsValid: false,
        nationality: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let emailIsValid = this.state.emailIsValid;
        let passwordIsValid = this.state.passwordIsValid;
        if (event.target.name === 'email') {
            if (this.state.email.includes('@')) emailIsValid = true;
            else emailIsValid = false;
        }
        if (event.target.name === 'password') {
            if (this.state.password.length > 6) passwordIsValid = true;
            else passwordIsValid = false;
        }
        this.setState({
            [name]: value,
            emailIsValid: emailIsValid,
            passwordIsValid: passwordIsValid
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="SignupPage">
                <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={(e) => this.handleChange(e)}
                            valid={this.state.emailIsValid}
                            invalid={!this.state.emailIsValid}
                        />
                        <FormFeedback
                            valid={this.state.emailIsValid}
                            invalid={!this.state.emailIsValid}
                        >
                            {this.state.emailIsValid ? 
                                'You typed a valid email'
                                :
                                'You typed an invalid email'}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={(e) => this.handleChange(e)}
                            valid={this.state.passwordIsValid}
                            invalid={!this.state.passwordIsValid}
                        />
                        <FormFeedback
                            valid={this.state.passwordIsValid}
                            invalid={!this.state.passwordIsValid}
                        >
                            {this.state.passwordIsValid ? 
                                'Your Password is strong'
                                :
                                'Your password is too weak'}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="nationality">Nationality</Label>
                        <Input type="select" name="nationality" id="nationality" value={this.state.nationality} onChange={(e) => this.handleChange(e)}>
                            <option value="en">English</option>
                            <option value="de">German</option>
                            <option value="fr">French</option>
                        </Input>
                    </FormGroup>
                    <Button color="primary">Sign up</Button>
                </Form>
                <Greetings lang={this.state.nationality}>
                    <p>Your email adress is: {this.state.email}</p>
                </Greetings>
            </div>
        )
    }
}

export default SignupPage;