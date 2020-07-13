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
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
          <label> Nationality:</label>
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
        <h3>{this.state.nationality}</h3>
        <p>Your email address is: {this.state.email}</p>
      </div>
    );
  }
}
