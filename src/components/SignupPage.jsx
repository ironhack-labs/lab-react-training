import React, { Component } from 'react';

export default class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: 'fr',
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({
      [key]: value,
    });
  };

  greetUser = () => {
    let lang = ['Bonjour', 'Hello', 'Hallo'];
    if (this.state.nationality === 'fr') {
      return lang[0];
    } else if (this.state.nationality === 'en') {
      return lang[1];
    } else {
      return lang[2];
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // do something with this local state (ex: send it to db)
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            placeholder="email"
            name="email"
          />
          <input
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            placeholder="password"
            name="password"
          />
          <select
            onChange={this.handleChange}
            value={this.state.nationality}
            name="nationality"
            id="nationality"
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          <button>submit</button>
          <p>
            {this.greetUser()}, your email is {this.state.email}
          </p>
        </form>
      </div>
    );
  }
}
