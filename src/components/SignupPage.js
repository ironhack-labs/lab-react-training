import React, { Component } from 'react'

class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            nationality: ''
        }
    }
    handleChange = ({target}) => {
        this.setState(state => ({...state, [target.name]: target.value}))
    }
    checkEmail = () => {
        const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
        if (regex.test(this.state.email)) {
            return(
                <div className='form-group'>
                    <label htmlhtmlFor='Email'>Email address</label>
                    <input type='email'  className='form-control is-valid' name='email' placeholder='Enter your email' onChange={this.handleChange}/>
                    <p style={{color: 'green'}}>You typed a valid email</p>
                </div>
            ) 
        } else {
            return (
                <div className='form-group'>
                    <label htmlFor='Email'>Email address</label>
                    <input type='email'  className='form-control is-invalid' name='email' placeholder='Enter your email' onChange={this.handleChange}/>
                    <p style={{color: 'red'}}>You typed an invalid email</p>
                </div>
            )
        }
    }
    checkPassword = () => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if (regex.test(this.state.password)) {
            return (
                <div className='form-group'>
                    <label htmlFor='Password'>Password</label>
                    <input type='password' className='form-control is-valid' name='password' onChange={this.handleChange}/>
                    <p style={{color: 'green'}}>Your password is strong</p>
                </div>
            )
        } else {
            return (
                <div className='form-group'>
                    <label htmlFor='Password'>Password</label>
                    <input type='password' className='form-control is-invalid' name='password' onChange={this.handleChange}/>
                    <p style={{color: 'red'}}>Your password is too weak</p>
                </div>
            ) 
        }
    }
    greetings = () => {
        switch (this.state.nationality) {
            case 'de':
                return 'Hallo'
            case 'fr':
                return 'Bonjour'
            default:
                return 'Hello'
        }
    }
    render() {
        return (
            <div className='signup'>
                {this.checkEmail()}
                {this.checkPassword()}
                <div>
                    <label  htmlFor='nationality'>Nationality </label>
                    <select className='form-control' name='nationality' id='nationality' onChange={this.handleChange}>
                        <option value='en'>English</option>
                        <option value='de'>Deutsch</option>
                        <option value='fr'>Français</option>
                    </select>
                </div>
                <div>
                    <button className='btn btn-primary'>Sign up</button>
                </div>
                <div>
                    <p>{this.greetings()}</p>
                    <p>Your email address is: {this.state.email}</p>
                </div>
            </div>

        )
    }
}

export default SignupPage