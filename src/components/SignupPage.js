import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Greetings from './Greetings';

class SignupPage extends React.Component {
    state = {
        email:"",
        password:"",
        nationality:"",
        show:false,
        validated: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let newEmail = event.currentTarget.email.value
        let newPassword = event.currentTarget.password.value
        let newNationality = event.currentTarget.nationality.value
        this.setState({
            validated:true, 
        })
        if(event.currentTarget.checkValidity() === true){
            this.setState({
                email: newEmail,
                password: newPassword,
                nationality: newNationality,
                show:true
            })
        }
    }

    render() {
        return (
            <div>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required name="email" type="email" placeholder="Enter email" />
                        <Form.Control.Feedback>You typed a valid email</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid email
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control minLength="6" required name="password"  type="password" placeholder="Password" />
                        <Form.Control.Feedback>You password is strong</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                        Your password is too weak
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control name="nationality"  as="select" defaultValue="en">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
                <p>
                    {this.state.show && <Greetings lang={this.state.nationality}>
                    <br/> Your email address is {this.state.email}
                    <br/> Your email address is correct
                    </Greetings>}
                </p>
            </div>
        )
    }
}

export default SignupPage