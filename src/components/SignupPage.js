import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './SignupPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class SignupPage extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.SubmitResponse = this.SubmitResponse.bind(this);
        this.state = {
            email: '',
            password: '',
            nationality: '',
            submitted: 'not-submitted'
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submitted: 'submitted'
        })
    }

    handleChange(e) {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    SubmitResponse = (props) => {
        return(
            <div className={props.submissionState}>
                <br/>
                <br/>
                <br/>
                <p>{props.greeting}</p>
                <p>{`Your email address is: ${props.email}`}</p>
            </div>
        );
    }

    getGreeting() {
        let greeting = ''
        switch(this.state.nationality) {
            case 'de':
                greeting = 'Hallo'
                break
            case 'en':
                greeting = 'Hello'
                break
            case 'fr':
                greeting = 'Salut'
                break
            default:
        }
        return greeting;
    }

    render() {

        return(
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="email" placeholder="e.g. john@doe.com" onChange={e => this.handleChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label >Password</Label>
                        <Input type="password" name="password" placeholder="Password" onChange={e => this.handleChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label >Select nationality</Label>
                        <Input type="select" name="nationality" onChange={e => this.handleChange(e)}>
                            <option>en</option>
                            <option>de</option>
                            <option>fr</option>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                <this.SubmitResponse submissionState={this.state.submitted} greeting={this.getGreeting()} email={this.state.email}/>
            </React.Fragment>
            
        );
    }
}

export default SignupPage;