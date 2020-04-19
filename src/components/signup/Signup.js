import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, Button} from 'reactstrap';

class Signup extends Component {
    
    state = {
        email: "",
        password: "",
        nationality: "es"
    }

    validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
    }
    
    validatePw = () => {
        //To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
        const re =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return re.test(this.state.password);
    }

    onInputChange = (e) => {
        this.setState(
            {[e.target.name] : e.target.value}
        )
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="exampleEmail" 
                            placeholder="your email"
                            onChange={this.onInputChange}
                            value={this.state.email}
                            invalid= {this.validateEmail() === false && this.state.email.length !== 0 ? true : false } 
                            valid= {this.validateEmail() === true && this.state.email.length !== 0 ? true : false } 
                            />
                        <FormFeedback>Not valid email</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePW">Password</Label>
                        <Input 
                            type="password" 
                            name="password" 
                            id="examplePw" 
                            placeholder="your password"
                            onChange={this.onInputChange}
                            value={this.state.password}
                            invalid= {this.validatePw() === false && this.state.password.length ? true : false }
                            valid= {this.validatePw() === true && this.state.password.length ? true : false } 
                            />
                        <FormFeedback>Password too weak</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Nationality</Label>
                        <Input type="select" name="nationality" id="exampleSelect" onChange={this.onInputChange}>
                        <option>es</option>
                        <option>de</option>
                        <option>fr</option>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                <div>
                    <div>{this.state.nationality === "es" ? "Hola" :
                            this.state.nationality === "de" ? "Hallo" : "Bonjour"}</div>
                    {this.state.email.length > 0 &&
                        <div>your email is {this.state.email}</div>
                    }
                    <div>your email is {this.validateEmail(this.state.email) === true ? "correct" : "incorrect" }</div>
                </div>
            </div>
        );
    }
};
    
export default Signup;