import React, { Component } from 'react'
import Greeting from './Greetings'

export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nationality: ''
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className="signupForm">
                <form className="formDiv" onSubmit={this.handleFormSubmit}>
                    <label><h2>Email:</h2></label>
                    <input className="formInput" type="email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />

                    <label><h2>Password:</h2></label>
                    <input className="formInput" type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />

                    <label><h2>Nationality:</h2></label>
                    <select className="selectIput" name="nationality" value={this.state.nationality} onChange={(e) => this.handleChange(e)}>
                        <option value="fr">FR</option>
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                    </select>
                    <button className="formButton">Sign Up</button>
                </form>
                <div className="formMessages">
                    <Greeting
                        className="messForm" lang={this.state.nationality}
                    />
                    <h3>Your email is {this.state.email}</h3>
                </div>
            </div>
        )
    }
}
