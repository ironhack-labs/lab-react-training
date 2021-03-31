import React, { Component } from 'react'
import Greetings from './Greetings'
import '../assets/css/SignupPage.css'

class SignupPage extends Component {
    state = {
        email: "",
        password: "",
        nationality: "en",
        emailIsValid: "",
        passwordIsValid: "",
        showResponse: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const isValidmail = this.state.email.includes('@') && this.state.email.includes('.');
        this.setState({emailIsValid: isValidmail})

        const isValidPassword = this.state.password.length > 3;
        this.setState({ passwordIsValid: isValidPassword })
        
        this.setState({ showResponse: true }) 
    }

    handleChange = (e) => {
        let value = e.target.value
        this.setState({[e.target.id]: value})
    }

    render() {
        return (
            <div className="SignupPage container">
                <form onSubmit={this.handleSubmit}>
                    
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div class="form-group">
                        <label htmlFor="nationality">Nationality</label>
                        <select
                            class="form-control"
                            id="nationality"
                            name="nationality"
                            value={this.state.nationality}
                            onChange={this.handleChange}
                            >
                            <option value="en">English</option>
                            <option value="de">Deutsche</option>
                            <option value="fr">Français</option>
                            </select>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                {
                this.state.showResponse &&
                <div className="container">
                    <Greetings lang={this.state.nationality}/>
                    <p className="response">Your email is {this.state.email}</p>
                        
                    {this.state.emailIsValid === true ? 
                    <p className="response" style={{color:"green"}}>Your email is valid</p> : 
                    this.state.emailIsValid === false ? 
                    <p className="response" style={{ color: "red" }}>Your email is not valid</p> : ""}
                    
                    {this.state.passwordIsValid === true ? 
                    <p className="response" style={{color:"green"}}>Your password is valid</p> : 
                    this.state.passwordIsValid === false ? 
                    <p className="response" style={{color:"red"}}>Your password is not valid</p> : ""}
                </div>
                }
            </div>
        )
    }
}

export default SignupPage