import React, { Component } from 'react'

export default class SignupPage extends Component {
    state = {
        email: '', 
        password: '', 
        nationality: '', 
        showGreet: false
    }

    changeHandler = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    changeHandlerSelect = (e) => {
        const { name, option } = e.target
        this.setState({
            nationality: option
        })
    }

    getData = (e) => {
        e.preventDefault()
        this.setState({
            email: this.state.email, 
            password: this.state.password, 
            nationality: this.state.nationality, 
            showGreet: true
        })
    }

    render() {
        let greet
        if (this.state.nationality === 'fr') {
            greet = "Bonjour" 
        } else if (this.state.nationality === 'de') {
            greet = 'Hallo'
        } else {
            greet = "Hello" 
        }

        return (
            <div>
            <form>
            <label htmlFor="">Email</label>
                <input  onChange={this.changeHandler} type="email" defaultValue={this.state.email} name="email" placeholder="test@email.com"/>
                <label htmlFor="">Password</label>
                <input onChange={this.changeHandler} defaultValue={this.state.password} type="password" placeholder="******"/>
                <label htmlFor="nationality">Nationality</label>
                <select name="nationality" id="nationality" value={this.state.nationality} onChange={this.changeHandler}>
                <option key='en' defaultValue='en'>en</option>
                <option key="de" value="de">de</option>
                <option key="fr" value="fr">fr</option>
                </select>
                <button onClick={this.getData} type='submit'>Sign up</button>
            </form>
            {this.state.showGreet ? (
                <div>
                    <p>{greet}</p>
                    <p>Your email address is: {this.state.email}</p>
                </div>
            ) : null}
            </div>
        )
    }
}
