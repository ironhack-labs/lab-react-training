import React, { Component } from 'react';
import '../assets/css/SignupPage.css'
export default class SignupPage extends Component {
    state = {
        email: 'Email',
        password: 'Password',
        nationality: 'Nationality'
    }

    handleSubmit = () => {
        console.log('hola')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

    render() {
        return (
            <div className='SignupPage'>
                <form className='SignupPageForm' onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" onChange={this.handleChange} name="email" value={this.state.email} /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" onChange={this.handleChange} name="password" value={this.state.password} /><br />
                    <label htmlFor="nationality">Nationality</label><br />
                    <select name="nationality" onChange={this.handleChange} value={this.state.nationality}>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Scotland">Scotland</option>
                        <option value="Italy">Italy</option>
                    </select><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}