import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Greetings from './Greetings';

class Signup extends React.Component{
    state = {
        email: '',
        password: '',
        nationality: '',
        validated: false,
        show:false,
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newEmail = e.currentTarget.email.value
        let newPassword = e.currentTarget.password.value
        let newNationality = e.currentTarget.nationality.value
        this.setState({
            validated:true, 
        })
        if(e.currentTarget.checkValidity() === true){
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
            <Form noValidate validated={this.state.validated} onClick={this.handleSubmit} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
                <Form.Control.Feedback>You typed a valid email</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                Please provide a valid email
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
                <Form.Control.Feedback>You password is strong</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                Your password is too weak
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control name="nationality" as="select">
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>

            {this.state.show && <div><Greetings lang={this.state.nationality}>
            </Greetings> <p>Your email is {this.state.email}</p> </div> }
            
        </div>
    )
    }
}


export default Signup;