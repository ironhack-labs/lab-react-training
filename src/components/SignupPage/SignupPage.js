// className="is-success"/"is-danger"

import React, { Component } from "react"
import './SignupPage.css'

class SignupPage extends Component {
    state = { 
        email: '',
        password: '',
        nationality: 'english',
        submitted: false,
        error: false
     }

    handleChange = (event) => {
        const { name, value } = event.target

        if (!this.state.submitted) {
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit = (event) => {
        const { email, password, error } = this.state
        const strongPassword = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'

        event.preventDefault()

        if (email && password.match(strongPassword)){
            this.setState({
                submitted: true,
                error: false
            })
        } else {
            this.setState({
                error: "The password is too weak: has to be at least 8 characters, include a digit and and Uppercase letter"
            })
        }
    }

    checkPassword = () => {
        const { password } = this.state
        
    }

    render() {
        const { email, password, nationality, submitted, error } = this.state
        
        return (
            <div className="form">
                
                <form className="fields" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Email</label>
                        
                        <div className="control has-icons-left has-icons-right">
                            <input 
                                className="input" 
                                type="email" 
                                placeholder="Email input" 
                                value={this.state.email} 
                                onChange={this.handleChange}
                                name="email"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        
                        <div className="control has-icons-left has-icons-right">
                            <input 
                                className={error ? 'input is-danger' : 'input'}
                                type="password"
                                placeholder="Text input"
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                            />
                        </div>
                        
                        { error &&
                            <p className="help is-danger">{error}</p>
    }
                    </div>

                    <div>
                        <label className="label">Nationality</label>
                    
                        <div className="select">
                            <select onChange={this.handleChange} name="nationality">
                                <option value="english">English</option>
                                <option value="german">German</option>
                                <option value="french">French</option>
                            </select>
                        </div>
                    </div>


                    <div className="field is-grouped">

                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                        
                    </div>
                </form>

                { submitted && 
                    <div className="message-box">
                        <h2>{nationality === "english" ? "Hello there" : nationality === "german" ? "Hallo süsse" : "Salut!"}</h2>
                        <p>Your email is:</p>
                        <p>{email}</p>
                        <p></p>
                    </div>
                }
            </div>
        )
    }
}

export default SignupPage