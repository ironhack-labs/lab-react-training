import React from 'react';

class SignupPage extends React.Component {
    state = {
        email: '',
        password: '',
        nationality: 'de',
        inputInfo: {
            email: '',
            password: '',
            nationality: '',
        }
    };

    validateEmail = email => {
        const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reEmail.test(String(email).toLowerCase());
    }

    validatePassword = password => {
        const rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return rePassword.test(String(password));
    }

    handleChange = event => {
        const { name, value } = event.target;
        const info = this.state.inputInfo;
        const messageElement = event.target.nextSibling;
        if (name === "email") {
            if (this.validateEmail(value)) {
                info[name] = "You typed a valid email";
                messageElement.style.color = "green";
            } else {
                info[name] = "Invalid email";
                messageElement.style.color = "red";
            }
        } else if (name === "password") {
            if (this.validatePassword(value)) {
                info[name] = "Your password is strong";
                messageElement.style.color = "green";
            } else {
                info[name] = "At least eight characters, one uppercase letter, one lowercase letter, one number and one special character";
                messageElement.style.color = "red";
            }
        }

        this.setState(() => ({
            [name]: value,
            inputInfo: info
        }))

    }



    render() {
        const greetings = {
            en: "Hello",
            de: "Hallo",
            fr: "Bonjour"
        };

        return(
            <form className="p-3 mb-2 mt-2 ml-5 mr-5">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => this.handleChange(e)} />
                    <small id="emailHelp" className="form-text">{this.state.inputInfo.email}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" value={this.state.password} id="password" placeholder="Password" onChange={e => this.handleChange(e)} aria-describedby="passwordHelp"/>
                    <small id="passwordHelp" className="form-text">{this.state.inputInfo.password}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="nationality">Nationality</label>
                    <select className="form-control" id="nationality" name="nationality" value={this.state.nationality} onChange={e => this.handleChange(e)}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
                <hr />
                {greetings[this.state.nationality]}
                <br />
                {this.state.email && `Your email address is: ${this.state.email}`}
                <br />
                {this.validateEmail(this.state.email) && `Your email address is correct`}
                {!this.validateEmail(this.state.email) && `Your email address is incorrect`}

            </form>
        )
    }
}

export default SignupPage;