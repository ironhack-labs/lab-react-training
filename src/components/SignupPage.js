import React, { Component } from 'react';

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: '',
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  };

  handleLang = {
    en : "Hello",
    de : "Hallo",
    fr : "Bonjour"
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form className="Form">
          <h2>Add</h2>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            id="email"
            type="text"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            name="password"
            id="password"
          />

          <select
            value={this.state.nationality}
            onChange={this.handleChange}
            htmlFor="nationality"
            name="nationality"
            id="nationality"
          >
            <option value="en" name="en">
              en
            </option>
            <option value="de" name="de">
              de
            </option>
            <option value="fr" name="fr">
              fr
            </option>
          </select>
        </form>
        <p>Your email is : {this.state.email}</p>
        <p>{this.handleLang[this.state.nationality]}</p>
      </div>
    );
  }
}

export default SignupPage;
