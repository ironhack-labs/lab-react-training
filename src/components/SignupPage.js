import React, { Component } from 'react';

class SignupPage extends Component {
    state = {
        email: '',
        password: '',
        nationality: '',
        emailValid: false,
        formVisible: false
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        return re.test(String(email).toLowerCase());
    }

    handleClick = () => {
        this.setState({
            emailValid: this.validateEmail(this.state.email),
            formVisible: true
        });
    };

    render() {
        const { email, password, nationality, emailValid, formVisible } = this.state;
        const greeting = {
            en: 'Hello',
            de: 'Hallo',
            fr: 'Bonjour'
        } 

        return (
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name='email' value={email} onChange={this.handleInput}></input>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' name='password' value={password} onChange={this.handleInput}></input>
                <label htmlFor='nationality'>Nationality</label>
                <select id='nationality' name='nationality' value={nationality} onChange={this.handleInput}>
                    <option value="">--Please choose an option--</option>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>
                <button onClick={this.handleClick}>Sign up</button>
                {
                    formVisible && 
                    <div>
                        <p>{greeting[nationality]}</p>
                        <p>Your email address is: {email}</p>
                        <p>{emailValid ? 'Your email adrress is correct' : 'Your email adrress is incorrect'}</p>
                    </div>
                }
            </div>
        );
    }
}

export default SignupPage;