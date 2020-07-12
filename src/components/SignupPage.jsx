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
            return <p style={{color: 'green'}}>You typed a valid email</p>
        } else {
            return <p style={{color: 'red'}}>Your email is wrong</p>
        }
    }
    checkPassword = () => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        if (regex.test(this.state.password)) {
            return <p style={{color: 'green'}}>Your password is strong</p>
        } else {
            return <p style={{color: 'red'}}>Your password is too weak</p>
        }
    }
    selectGreeting = () => {
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
            <div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name='email' placeholder='Enter your email' onChange={this.handleChange}/>
                    {this.checkEmail()}<br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' onChange={this.handleChange}/>
                    {this.checkPassword()}<br />
                    <label htmlFor="nationality">Nationality: </label>
                    <select name="nationality" id="nationality" onChange={this.handleChange}>
                        <option value="en">English</option>
                        <option value="de">Germany</option>
                        <option value="fr">French</option>
                    </select>
                    <button>Sign up</button>
                </div>
                <div>
                    <hr />
                    <p>{this.selectGreeting()}</p>
                    <p>Your email address is: {this.state.email}</p>
                </div>
            </div>

        )
    }
}

export default SignupPage
