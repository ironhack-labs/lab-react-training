import React, { Component } from 'react'
import './../styles/iteration15.css'

export default class SignupPage extends Component {

    state = {
        email: "",
        password: "",
        nationality: "EN",
        isSubmit: false,
    }

    handlegetValue = event => {
        if (!this.state.isSubmit) {
            this.setState({[event.target.name]:event.target.value})
        }
    }

    renderWelcomeMessage = event => {
        const {isSubmit, email, password, nationality} = this.state 
        event.preventDefault()
        this.setState({
            isSubmit: !isSubmit,
            email: isSubmit ? "" : email,
            password: isSubmit ? "" : password,
            nationality: isSubmit ? "EN" : nationality
            }
            )
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword(password) {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/ ;
        console.log(password.match(regex))
        return password.match(regex)
    }

    render() {
        const {isSubmit, email, password, nationality} = this.state ;
        console.log(email, password, nationality)
        return (
            <div className="SignupPage__container">
                <form action="" className="SignupPage__form" onSubmit={this.renderWelcomeMessage}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <div className="SignupPage__input"> 
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                onChange={this.handlegetValue}
                                value={email}
                                style={{
                                    borderColor: this.validateEmail(email) ? "green" : "red",
                                    outline: "none" 
                                }}
                            />
                            <div>
                                {this.validateEmail(email) && <p style={{color: "green"}}>Valid email</p> }                            {this.validatePassword(password) && <p style={{color: "green"}}Valid Password></p> }
                                {!this.validateEmail(email) && <p style={{color: "red"}}>Invalid email</p> }
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className="SignupPage__input"> 
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                onChange={this.handlegetValue}
                                value={password}
                                style={{
                                    borderColor: this.validatePassword(password) ? "green" : "red",
                                    outline: "none" 
                            }}/>
                            <div>
                                {this.validatePassword(password) && <p style={{color: "green"}}>Valid Password</p> }                            {this.validatePassword(password) && <p style={{color: "green"}}Valid Password></p> }
                                {!this.validatePassword(password) && <p style={{color: "red"}}>Invalid Password</p> }
                            </div>
                        </div>
                    </div>


                    <div>
                        <label htmlFor="nationality">Nationality</label>
                        <select 
                            type="text" 
                            id="nationality" 
                            name="nationality"
                            onChange={this.handlegetValue}
                            value={nationality}>
                            <option value="EN">EN</option>
                            <option value="ES">ES</option>
                            <option value="FR">FR</option>
                        </select>
                    </div>
                    <button>
                        {isSubmit && "Hide"}
                        {!isSubmit && "Submit"}
                    </button>
                </form>
                <div>
                    {isSubmit &&
                        (
                        <div>
                            <p>
                            {nationality === "EN" && "Hello !"}
                            {nationality === "ES" && "Hola !"}
                            {nationality === "FR" && "Bonjour !"}
                            </p>
                            <p>
                                Your email is {email}
                            </p>
                        </div>
                         )
                    }
                </div>
            </div>
        )
    }
}
