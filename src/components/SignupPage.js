import React, { Component } from 'react';
import '../assets/css/SignupPage.css';
import Greetings from './Greetings';

export default class SignupPage extends Component {
  state = {
    email: 'Email',
    password: 'Password',
    nationality: 'Nationality',
    emailColor: null,
    passwordColor: false,
    submit: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('estamos en submit');
    this.setState({ submit: true });
  };

  handleChange = (e) => {
    e.preventDefault();
    let eColor = false;
    let pColor = false;
    if (
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(
        this.state.email
      )
    ) {
      eColor = true;
    }
    if (
      /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(this.state.password)
    ) {
      pColor = true;
      console.log('La pass es correcta.');
    } else {
      console.log('La pass es incorrecta.');
    }
    this.setState({
      [e.target.name]: e.target.value,
      emailColor: eColor,
      passwordColor: pColor,
    });
  };

  render() {
    return (
      <div className="SignupPage">
        <form className="SignupPageForm" onSubmit={this.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              style={{ color: this.state.emailColor ? 'green' : 'red' }}
            >
              Email
            </label>
            <br />
            <input
              type="email"
              style={{
                borderColor: this.state.emailColor ? 'green' : 'red',
                color: this.state.emailColor ? 'green' : 'red',
              }}
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              autoComplete="off"
            />
            <br />
            <p style={{ color: this.state.emailColor ? 'green' : 'red' }}>
              {this.state.emailColor
                ? ' You typed a valid email'
                : 'The email address entered is incorrect'}
            </p>
          </div>
          <div>
            <label
              htmlFor="password"
              style={{ color: this.state.passwordColor ? 'green' : 'red' }}
            >
              Password
            </label>
            <br />
            <input
              type="password"
              style={{
                borderColor: this.state.passwordColor ? 'green' : 'red',
                color: this.state.passwordColor ? 'green' : 'red',
              }}
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              autoComplete="off"
            />
            <br />
            <p style={{ color: this.state.passwordColor ? 'green' : 'red' }}>
              {this.state.passwordColor
                ? 'Correct password'
                : '8-16 characters long, one digit, one lowercase, one uppercase.'}
            </p>
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
            <br />
            <select
              name="nationality"
              onChange={this.handleChange}
              value={this.state.nationality}
            >
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="Scotland">Scotland</option>
              <option value="Italy">Italy</option>
            </select>
            <button type="submit">Submit</button>
          </div>
        </form>
        {this.state.submit && (
          <Greetings lang={this.state.nationality}>
            Your email address is: {this.state.emailColor && this.state.email}
          </Greetings>
        )}
        {this.state.emailColor ? (
          <p>Your email address is correct</p>
        ) : (
          <p>Your email address is wrong</p>
        )}
      </div>
    );
  }
}
