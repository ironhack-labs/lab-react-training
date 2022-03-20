import React, { Component } from "react"

class SignupPage extends Component {
    state = {
        email: "",
        password: "",
        nationality: "de"
    }

    getGreeting = () => {
        switch (this.state.nationality) {
            case "en":
                return "Hello"
            case "de":
                return "Hallo"
            case "fr":
                return "Bonjour"
            default:
                return "Hello"
        }
    }

    render() {
        return (
            <div>
                <input type="email" onChange={e => this.setState({ email: e.target.value })} />
                <input type="password" onChange={e => this.setState({ password: e.target.value })} />
                <select name="select" value={this.state.nationality} onChange={e => this.setState({ nationality: e.target.value })}>
                    <option value="en">en</option>
                    <option value="de">de</option>
                    <option value="fr">fr</option>
                </select>
                <p>{this.getGreeting()}</p>
                <p>Your email is: {this.state.email}</p>
            </div>
        )
    }
}

export default SignupPage;