import React, { Component } from 'react'
import "./SignupPage.css"

export class SignupPage extends Component {
        state = {
                input: {},
                errors: {}
        };

        handleChange = (event) => {
                let enterInput = this.state.input;
                enterInput[event.target.name] = event.target.value;
                this.setState({ input: enterInput })
        };
        checkValidation = () => {
                let input = this.state.input;
                let errors = {};
                let isValid = true;
                //check email
                if (!input.email) {
                        errors.email = 'Please enter your email address';
                        isValid = false;
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
                        errors.email = 'Email address is invalid';
                        isValid = false;
                } else {
                        errors.email = "You typed a valid email"
                        isValid = true;
                }
                //check password
                if (!input.password) {
                        isValid = false;
                        errors.password = 'Please enter your password';
                } else if (input.password.length < 6) {
                        isValid = false;
                        errors.password = "Password needs to be 6 characters or more";
                } else {
                        isValid = true;
                        errors.password = 'Strong password';
                }
                this.setState({ errors: errors });
                return isValid
        }

        handleSubmit = (event) => {
                event.preventDefault();
                if (this.checkValidation()) {
                        console.log(this.state.input.email, this.state.input.password)
                }


        };

        greeting = () => {
                if (this.state.input.nationality === "en") return "Hello"
                else if (this.state.input.nationality === "de") return "Hallo"
                else if (this.state.input.nationality === "fr") return "Bonjour"
                else return ''
        }
        render() {
                return (
                        <div className="SignupPage flex-column">
                                <h1>SignUp</h1>
                                <form onSubmit={this.handleSubmit} className="SignupForm flex-column">
                                        <div className="flex-column">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" id="email"
                                                        onChange={this.handleChange}
                                                        value={this.state.input.email}
                                                        style={{ borderColor: this.state.errors.email === "You typed a valid email" ? "green" : "red" }} />

                                                <p style={{ color: this.state.errors.email === "You typed a valid email" ? "green" : "red" }}
                                                >{this.state.errors.email}</p>
                                        </div>

                                        <div className="flex-column">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password" id="password"
                                                        onChange={this.handleChange}
                                                        value={this.state.input.password}
                                                        style={{ borderColor: this.state.errors.password === "Strong password" ? "green" : "red" }} />

                                                <p style={{ color: this.state.errors.password === "Strong password" ? "green" : "red" }}
                                                >{this.state.errors.password}</p>
                                        </div>

                                        <div className="flex-column">

                                                <label htmlFor="nationality">Nationality</label>
                                                <select type="nationality" name="nationality" id="nationality" onChange={this.handleChange} value={this.state.input.nationality}>
                                                        <option value="en" defaultValue>England</option>
                                                        <option value="de">German</option>
                                                        <option value="fr">France</option>
                                                </select>
                                        </div>


                                        <button type="submit">Sign Up</button>
                                </form>
                                <div>
                                        {this.greeting() && <p>{this.greeting()}</p>}
                                        {this.state.input.email && <p>Your email address is: {this.state.input.email}</p>}
                                        {this.state.errors.email === "You typed a valid email" && <p>Your email address is correct</p>}
                                </div>

                        </div>
                )
        }
}

export default SignupPage
