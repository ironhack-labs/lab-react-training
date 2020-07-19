import React, { useState } from 'react'
import {Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import Greetings from '../Greetings'

const SignupPage = () => {

    const initialState = {
        form: {
            email: '',
            password: '',
            validated: false,
            nationality: ''
        },
        message: {
            email: '',
            nationality: '',
            isSubmited: false
        }
    }

    const [state, setState] = useState(initialState)

    const handleInput = ({target}) => {
        setState({
            form: {
                ...state.form,
                [target.name]: target.value
            },
            message: {
                email: '',
                nationality: '',
                isSubmited: false
            }
        })
    }

   const handleSave = (evento) => {
        evento.preventDefault()
        if(evento.currentTarget.checkValidity()){
            const message = {
                email: state.form.email,
                nationality: state.form.nationality,
                isSubmited: true
            }
           setState(() => ({
                form: {
                    email: '',
                    password: '',
                    nationality: ''
                },
                message: message
            }))
        } else {
            alert('Falta info culiao')
        }
    }

  

    const greeting = () => { 
        return state.message.isSubmited ? <Greetings lang={state.message.nationality}>
            <p>Your Email Address is: {state.message.email}</p>
            <p>Your Email Address is correct</p>
        </Greetings> : ''
    }

    const crearForm = state => {
        return (
            <div className="Login">
            <Form onSubmit={ handleSave } noValidate validated={ state.form.validated }>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <FormControl type="email" name="email" onChange={ handleInput } value={ state.form.email } required />
                    <FormControl.Feedback>Todo se ve bien!</FormControl.Feedback>
                    <FormControl.Feedback type="invalid">Este campo es obligatorio!</FormControl.Feedback>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <FormControl type="password" name="password" onChange={ handleInput } value={ state.form.password } required />
                    <FormControl.Feedback>Todo se ve bien!</FormControl.Feedback>
                    <FormControl.Feedback type="invalid">Este campo es obligatorio!</FormControl.Feedback>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Nationality</Form.Label>
                    <FormControl as="select" name="nationality" onChange={ handleInput } value={ state.form.nationality }>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </FormControl>
                </FormGroup>
                <Button variant="primary" type="submit">Save</Button>
            </Form>
            </div>
        )
    }

    return (
        <div>
            {crearForm(state)}
            {greeting()}
        </div>
    )
}

export default SignupPage
