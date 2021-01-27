import React from 'react';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nationality: '',
            submitted: false
        }
    }

    handleChange = (e) => {
        const propertyName = e.target.name

        this.setState({ [propertyName]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        let greeting = ''
        switch (this.state.nationality) {
            case "en":
                greeting = 'Hello';
                break;
            case "de":
                greeting = 'Hallo';
                break;
            case "fr":
                greeting = 'Bonjour';
                break;
            default:
                greeting = 'Hi';
        }

        return (
            <div>
                <form>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your email" value={this.state.email} onChange={this.handleChange} />

                    <label>Password</label>
                    <input type="password" name="password" placeholder="****" value={this.state.password} onChange={this.handleChange} />

                    <label>Nationality</label>
                    <select name="nationality" value={this.state.nationality} onChange={this.handleChange}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>

                <hr />
                <p>{greeting}</p>
                <p>Your email address is: {this.state.email}</p>
            </div>
        )
    }
}

export default SignupPage;