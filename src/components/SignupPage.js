import React, { Component } from 'react';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'jondoe@ironhack.com',
      password: '',
      nationality: 'en',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validateEmail() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      return true;
    }
    return false;
  }

  validatePassword() {
    if (this.state.password.length <= 7) {
      return false;
    }
    return true;
  }

  greetingsLanguage() {
    if (this.state.nationality === 'en') {
      return 'Hello';
    } else if (this.state.nationality === 'de') {
      return 'Halo';
    } else if (this.state.nationality === 'fr') {
      return 'Bonjour';
    }
  }

  errorStyle() {
    return {
      color: 'red',
    };
  }

  rightStyle() {
    return {
      color: 'green',
    };
  }

  render() {
    return (
      <div className="form">
        <form>
          <label>Email</label>
          <br />
          <input
            name="email"
            type="email"
            value={this.state.email}
            style={this.validateEmail() ? this.rightStyle() : this.errorStyle()}
            onChange={(e) => this.handleChange(e)}
          />
          <p
            style={this.validateEmail() ? this.rightStyle() : this.errorStyle()}
          >
            {this.validateEmail()
              ? 'You typed a valid email'
              : 'You typed and invalid email'}
          </p>
          <label>Password</label>
          <br />
          <input
            name="password"
            type="password"
            value={this.state.password}
            style={
              this.validatePassword() ? this.rightStyle() : this.errorStyle()
            }
            onChange={(e) => this.handleChange(e)}
          />
          <p
            style={
              this.validatePassword() ? this.rightStyle() : this.errorStyle()
            }
          >
            {this.validatePassword()
              ? 'Your password is strong'
              : 'Your password is weak'}
          </p>
          <label>Nationality:</label>
          <br />
          <select
            name="nationality"
            value={this.state.nationality}
            onChange={(e) => this.handleChange(e)}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          <br />
          <br />
          <button>Sign Up</button>
        </form>
        <hr />
        <h3>{this.greetingsLanguage()}</h3>
        <p>Your email address is: {this.state.email}</p>
        <p>
          Your email address is {this.validateEmail() ? 'valid' : 'invalid'}
        </p>
      </div>
    );
  }
}
