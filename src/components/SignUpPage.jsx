import React from 'react';
import './../views/SignUp.css';



class SignUpPage extends React.Component {
    state = {
        email: "",
        password: "",
        nationality: "",
        emailIsValid: "NA",
        passwordIsValid: "NA"
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value;
        this.setState({[name] : value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const isValidmail = this.state.email.includes('@') && this.state.email.includes('.');
        this.setState({emailIsValid: isValidmail})

        const isValidPassword = this.state.password.length > 3;
        this.setState({passwordIsValid: isValidPassword})

    } 

    render() {

        return (
            <div className="SignUp">
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input 
                        style={
                            {border: this.state.emailIsValid === true ? "1px solid green" : 
                            this.state.emailIsValid === false ? "1px solid red" : "1px solid black"}
                        }
                        onChange={this.handleChange}
                        value={this.state.email}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="enter an email"
                    />
                    {this.state.emailIsValid === true ? 
                    <p style={{color:"green"}}>Your email is valid</p> : 
                    this.state.emailIsValid === false ? 
                    <p style={{color:"red"}}>Your email is not valid</p> : ""}

                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.password}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="enter an password"
                    />
                    {this.state.passwordIsValid === true ? 
                    <p style={{color:"green"}}>Your password is valid</p> : 
                    this.state.passwordIsValid === false ? 
                    <p style={{color:"red"}}>Your password is not valid</p> : ""}

                    <label htmlFor="nationality">Nationality</label>
                    <select 
                        onChange={this.handleChange}
                        value={this.state.nationality}
                        name="nationality" 
                        id="nationality"
                    >
                        <option value="">Please choose an option</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>

                    <button>Sign up</button>
                </form>

                <p>{this.state.nationality === "en" ? 
                    "Hello" : this.state.nationality === "fr" ? 
                    "Bonjour" : this.state.nationality === "de" ? 
                    "Hallo" : "Tell me what your nationality is"}</p>
                <p>Your email address is : {this.state.email}</p>
            </div>
        )
    }
}

export default SignUpPage

