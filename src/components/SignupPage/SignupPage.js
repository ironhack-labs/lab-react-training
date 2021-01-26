import React, { Component } from 'react';

class SignupPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            nationality: ''
        }
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value 
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();
    }

    render() {
        let greeting = 'Hello!';
        switch(this.state.nationality) {
            case 'en':
                greeting = 'Hello!';
                break;
            case 'de':
                greeting = 'Hallo!';
                break;
            case 'fr':
                greeting = 'Bonjour!';
                break;
        }

        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Email</label>
                    <input name='email' className="form-control" type='text' value={this.state.email} onChange={this.handleInputChange} />
                    <label>Password</label>
                    <input name='password' className="form-control" type='password' value={this.state.password} onChange={this.handleInputChange} />
                    <label>Nationality</label>
                    <select name='nationality' className="form-control" value={this.state.nationality} onChange={this.handleInputChange}>
                        <option value='en'>English</option>
                        <option value='de'>German</option>
                        <option value='fr'>French</option>
                    </select>
                    <button className="btn btn-primary" type='submit'>Sign up</button>
                </form>
                <hr></hr>
                {greeting !== '' ? greeting : false}
                <p>Your email address is: {this.state.email ? this.state.email : 'john@doe.com'}</p>
            </div>
            
        )
    }
}

export {SignupPage};