import React, { Component } from "react"
import "./SignupPage.css"

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

class SignupPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            nationality: "en"
        }
    }

    doUpdate = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        const isEmailValid = validateEmail(this.state.email)
        const cheers = () => {
            if (this.state.nationality === "en") {
                return "Hello"
            } else if (this.state.nationality === "de") {
                return "Hallo"
            } else {
                return "Bonjour"
            }
        }

        return (
            <div className="SignupPage">
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input style={isEmailValid ? {border: "solid 2px green"} : {border: "solid 2px red"}} type="email" className={isEmailValid ? "form-control is-valid" : "form-control is-invalid"} id="email" name="email" onChange={this.doUpdate} value={this.state.email}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" style={{borderWidth: "2px"}} id="password" name="password" className={this.state.password.length > 3 ? "form-control is-valid" : "form-control is-invalid"} onChange={this.doUpdate} value={this.state.password}></input>
                    </div>
                    <div>
                        <label htmlFor="nationality">Nationality</label>
                        <select className="form-select" name="nationality" id="nationality" onChange={this.doUpdate} value={this.state.nationality}>
                            <option value="en">English</option>
                            <option value="de">German</option>
                            <option value="fr">French</option>
                        </select>
                    </div>
                    <div>
                        <p>{cheers()}</p>
                        <p>Your email address is: {this.state.email}</p>
                    </div>
                </form>
                <div>
                    <button className="btn btn-primary">Signup</button>
                </div>
            </div>
        )
    }
}

export default SignupPage