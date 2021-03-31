import React, { Component } from 'react';
import '../assets/css/SignupPage.css'
import Greetings from './Greetings'

export default class SignupPage extends Component {
    state = {
        email: 'Email',
        password: 'Password',
        nationality: 'Nationality',
        emailColor: null,
        passwordColor: false
    }

    handleSubmit = () => {
        console.log('hola')
    }

    handleChange = (e) => {
        let eColor = false
        let pColor = false
        if (/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
            .test(this.state.email)) {
            eColor = true;
        }
        if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.state.password)) {
            pColor = true;
        } else {
            console.log("La dirección de email es incorrecta.");
        }
        this.setState({
            [e.target.name]: e.target.value,
            emailColor: eColor,
            passwordColor: pColor
        })
    }


    render() {
        return (
            <div className='SignupPage'>
                <form className='SignupPageForm' onSubmit={this.handleSubmit}>
                    <label htmlFor="email" style={{ color: this.state.emailColor ? 'green' : 'red' }}>Email</label><br />
                    <input type="email" style={{
                        borderColor: this.state.emailColor ? 'green' : 'red',
                        color: this.state.emailColor ? 'green' : 'red'
                    }} onChange={this.handleChange} name="email" value={this.state.email} />
                    <br />
                    <i style={{ color: this.state.emailColor ? 'green' : 'red' }}>
                        {this.state.emailColor ? ' You typed a valid email' : 'The email address entered is incorrect'}
                    </i><br />
                    <label htmlFor="password" style={{ color: this.state.passwordColor ? 'green' : 'red' }}>Password</label><br />
                    <input type="password" style={{
                        borderColor: this.state.passwordColor ? 'green' : 'red',
                        color: this.state.passwordColor ? 'green' : 'red'
                    }} onChange={this.handleChange} name="password" value={this.state.password} /><br />
                    <label htmlFor="nationality">Nationality</label><br />
                    <select name="nationality" onChange={this.handleChange} value={this.state.nationality}>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="Scotland">Scotland</option>
                        <option value="Italy">Italy</option>
                    </select><br />
                    <button type="submit">Submit</button>
                </form>
                <Greetings lang={this.state.nationality}>Your email address is: {this.state.emailColor && this.state.email}</Greetings>
            </div>
        )
    }
}