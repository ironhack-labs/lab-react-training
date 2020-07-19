import React, { Component } from 'react'
import Greetings from './Greetings'

class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            nationality: ''
        }
    }

    handleChange = (evento) => {
        this.setState({
            [evento.target.name]: evento.target.value
        })
        
    }


    handleSubmit = (e) => {

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="email">Email</label>
                    <input type="email" name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <label for="password">Password</label>
                    <input type="password" name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <select name="nationality"
                        value={this.state.nationality}
                        onChange={this.handleChange}>
                        <option selected value="en">English</option>
                        <option value="de">Deusch</option>
                        <option value="fr">Frances</option>
                    </select>
                    <input type="submit" value="Sign up" />
                    <Greetings lang={this.state.nationality}/>
                    <p>Your email address is {this.state.email}</p>
                </form>
            </div>
        )
    }
}


export default SignupPage