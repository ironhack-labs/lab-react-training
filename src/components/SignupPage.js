import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Greetings from './Greetings';

class SignupPage extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: "",
            password: "",
            nationality: ""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNationalityChange = this.handleNationalityChange.bind(this);
    }

    handleEmailChange(event) {
        console.log(event.target.value)
        this.setState({email: event.target.value});
    }
    
    handlePasswordChange(event) {
        console.log(event.target.value)
        this.setState({password: event.target.value});
    }

    handleNationalityChange(event) {
        console.log(event.target.value)
        this.setState({nationality: event.target.value});
    }

    render() {
        return (
            <div>
                <form className="form-group" action="">

                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" id="email" name="email" onChange={this.handleEmailChange} />

                    <label htmlFor="pwd">Password: </label>
                    <input type="password" className="form-control" id="pwd" name="password" onChange={this.handlePasswordChange} />

                    <label htmlFor="lang">Language:</label>
                        <select id="lang" className="form-control" name="lang" onChange={this.handleNationalityChange}>
                            <option value="en">EN</option>
                            <option value="de">DE</option>
                            <option value="fr">FR</option>
                        </select>
                </form>

                { this.state.email && <p>Your email is {this.state.email}</p> } 

                <Greetings lang={this.state.nationality}>John</Greetings>

            </div>
        )
    }
}

export default SignupPage
