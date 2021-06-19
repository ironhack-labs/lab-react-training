import { Button, Form, Input, Label, FormGroup } from 'reactstrap';
import React, { Component } from 'react'

class SignupPage extends Component {
    render() {
        return (
            <div className="signUpPage">
                <Form>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter your password" />
                    </FormGroup>
                </Form>
                <FormGroup>
                    <Label>Select</Label>
                    <Input type="select" id="nation" name="select">
                        <option>USA</option>
                        <option>Germany</option>
                        <option>France</option>
                    </Input>
                </FormGroup>
                <Button>Sign Up</Button>
            </div>

        );
    }
}

export default SignupPage;