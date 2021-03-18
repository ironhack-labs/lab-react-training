import React, { Component } from 'react'
import './../styles/iteration14.css'

export default class SignupPage extends Component {

    state = {
        email: "",
        password: "",
        nationality: "EN",
        isSubmit: false,
    }

    handlegetValue = event => {
        this.setState({[event.target.name]:event.target.value})
    }

    renderWelcomeMessage = event => {
        event.preventDefault()
        this.setState({isSubmit: !this.state.isSubmit})
    }

    render() {
        const {isSubmit, email, password, nationality} = this.state ;
        console.log(email, password, nationality)
        return (
            <div className="SignupPage__container">
                <form action="" className="SignupPage__form" onSubmit={this.renderWelcomeMessage}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email"
                            onChange={this.handlegetValue}
                            value={email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="text" 
                            id="password" 
                            name="password"
                            onChange={this.handlegetValue}
                            value={password}/>
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
                        <p>
                            {nationality === "EN" && "Hello !"}
                            {nationality === "ES" && "Hola !"}
                            {nationality === "FR" && "Bonjour !"}
                        </p>
                    }
                </div>
            </div>
        )
    }
}
