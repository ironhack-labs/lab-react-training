import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'



class SignupPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            email:{
                val: '',
                valid: false
            },
            password:{
                val: '',
                valid: false
            },
            nationality: '',
            displayMessage: false,
            greeting:''
        }
    }

    verifyField=(e)=>{
        const field = e.target.name
        const val = e.target.value
        let valid
        
        if(field==='email'){
            const emailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            valid = emailRE.test(val);
            console.log(valid)
        }else{
            const passwordRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            valid = passwordRE.test(val);
        }
        
        this.setState({
            [field]:{
                val,
                valid
            }
        })
    }

    countrySelected = (e) =>{
        const field = 'nationality'
        const val = e.target.value
        const Greetings = {'English': 'Hello', 'French':'Bonjour', 'German':'Hallo'}
        const greeting = Greetings[val]


        this.setState({
            [field]:val,
            greeting
        })
    }

    submitForm = (e) =>{
        e.preventDefault()
        if(this.state.email.valid && this.state.password.valid && this.state.nationality !== 'Language'){
            this.setState({displayMessage: true})
        }

    }

    resetForm = () =>{
        this.setState({
            email:{
                val: '',
                valid: false
            },
            password:{
                val: '',
                valid: false
            },
            nationality: '',
            displayMessage: false,
            greeting:''
        })
    }

    render() {

        return (

            <div>
                <div className='box'>
                    <Form>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input className={this.state.email.valid ? 'is-valid' : 'is-invalid'} type="email" name="email" id="Email" value={this.state.email.val} placeholder="someone@someone.com" onChange={this.verifyField}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Input  className={this.state.password.valid ? 'is-valid' : 'is-invalid'} type="password" name="password" id="Password" value={this.state.password.val} placeholder="password" onChange={this.verifyField}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={this.countrySelected}>
                                <option>Language</option>
                                <option>English</option>
                                <option>German</option>
                                <option>French</option>
                            </Input>
                        </FormGroup>
                        <Button onClick={this.submitForm}>Submit</Button>
                    </Form>
                </div>
                <div className={this.state.displayMessage ? 'box' : 'box is-hidden'}>
                    <p>{this.state.greeting}</p>
                    <p>Your Email is: {this.state.email.val}</p>
                    <p>Your email Address is correct</p>
                    <hr />
                    <button className='button button-outline' onClick={this.resetForm}>Close</button>
                </div>
            </div>
        )
    }
}



export {SignupPage}