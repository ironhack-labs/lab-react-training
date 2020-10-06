import React, { Component } from 'react'

export default class SignupPage extends Component {
    state = {
        email: '',
        password: '',
        nationality: 'en'
    }

    handleChange = async (event) => {
        const { value, name } = event.target;
        await this.setState(() => ({ [name]: value }));
    }

    submitForm = () => {

    }

    emailValidation = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return email.match(regex);
    }

    passwordValidation = (password) => {
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return password.match(regex);
    }

    render() {
        return (
            <div>
                <form style={{margin: "2rem auto", width: '50vw'}} onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label >Email: 
                            <input 
                                className={`form-control border ${this.emailValidation(this.state.email) ? 'border-success' : 'border-danger' }`} 
                                onChange={this.handleChange} 
                                type="email" 
                                name="email" 
                                value={this.state.email} 
                                placeholder="email" 
                                autoComplete="off"/>
                        </label>
                        <small className="form-text text-muted">{this.emailValidation(this.state.email) ? 'valid email' : 'not an email'}</small>
                    </div>
                    <div className="form-group">
                        <label >Password: 
                            <input 
                                className={`form-control border ${this.passwordValidation(this.state.password) ? 'border-success' : 'border-danger' }`} 
                                onChange={this.handleChange} 
                                type="password" 
                                name="password" 
                                value={this.state.password} 
                                placeholder="password" 
                                autoComplete="off"/>
                        </label>
                        <small className="form-text text-muted">{this.passwordValidation(this.state.password) ? 'valid password' : 'not an password'}</small>
                    </div>
                    <div className="form-group">
                        <label >Nationality: 
                            <select name="nationality" onChange={this.handleChange} className="form-control">
                                <option value="en" >USA</option>
                                <option value="de" >German</option>
                                <option value="fr" >France</option>
                            </select>
                        </label>
                        <small className="form-text text-muted">{this.state.nationality}</small>
                    </div>
                </form>
                <hr/>
                <p>{
                    this.state.nationality === 'en' ? 'Hello' 
                    : this.state.nationality === 'de' ? 'Hallo' 
                    : 'Bonjour'}
                </p>
                <p>Your email address is: {this.state.email}</p>
            </div>
        )
    }
}
