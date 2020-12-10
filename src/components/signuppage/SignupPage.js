import React, { Component } from 'react'

export default class SignUp extends Component {

    state = {
        email: '',
        password: '',
        nationality: '',
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log('event', event.target, 'state', this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }

    greeting = () => {
        if (this.state.nationality === 'English') return 'Hello'
        else if (this.state.nationality === 'German') return 'Hallo'
        else return 'Bonjour'
    }

    render() {

        return (
            <>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={ this.state.email } onChange={ this.handleChange } /><br/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={ this.state.password } onChange={ this.handleChange } /><br/>
                    <label htmlFor="nationality">Nationality</label>
                    <select id="nationality" name="nationality" value={ this.state.nationality } onChange={ this.handleChange }>
                        <option value="English">English</option>
                        <option value="German">German</option>
                        <option value="French">French</option>
                    </select><br/>
                    <button type="submit">Sign Up</button>
                </form>
                <hr/>
                <div>
                    <p>{ this.greeting() }</p>
                    <p>Your email is { this.state.email }</p>
                </div>
            </>
        )
    }
}
