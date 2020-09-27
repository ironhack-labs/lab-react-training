import React, { Component } from 'react';

export default class SignupPage extends Component {
  isFormSubmitted = false;
  state = {
    email: '',
    passwd: '',
    nationality: '',
    greeting: '',
  };

  /**  */
  validateForm = (event) => {
    event.preventDefault();
    const { email, passwd, nationality } = this.state;
    console.log(email + ' ' + passwd + ' --> ' + nationality);
    this.isFormSubmitted = true;
    let greeting = '';
    switch (nationality) {
      case 'en':
        greeting = 'Hello';
        break;
      case 'de':
        greeting = 'Hallo';
        break;
      case 'fr':
        greeting = 'Bonjour';
        break;
      default:
        greeting = 'Hello';
    }

    this.setState({
      email,
      passwd,
      nationality,
      greeting,
    });
  };

  handleOnChange = (event) => {
    this.isFormSubmitted = false;
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  /**  */
  render() {
    return (
      <div>
        <form method="POST" onSubmit={this.validateForm}>
          <label htmlFor="email"> Enter Email-Id : </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <label htmlFor="passwd"> Enter Password : </label>
          <input
            type="password"
            name="passwd"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <label htmlFor="nationality"> Choose nationality : </label>

          <select
            value={this.state.nationality}
            id="nationality"
            name="nationality"
            onChange={this.handleOnChange}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">France</option>
          </select>

          <button> Sign Up </button>
        </form>
        {this.isFormSubmitted && (
          <div>
            <h3> {this.state.greeting} </h3>
            <h3> Your email is: {this.state.email} </h3>
            <h3>
              Your email is
              {/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                this.state.email
              )
                ? 'Correct'
                : 'Incorrect'}
            </h3>
          </div>
        )}
        <br />
      </div>
    );
  }
}
