import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupPage.css';

export default class SignupPage extends Component {
  isFormSubmitted = false;
  isEmailValid = false;
  isPwsWeak = false;

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
    // check for email validation:
    this.isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      this.state.email
    )
      ? true
      : false;
    // check for password is strong or not
    var mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );
    this.isPwsWeak = mediumRegex.test(this.state.passwd) ? true : false;

    this.setState({
      email,
      passwd,
      nationality,
      greeting,
    });
  };

  /**  */
  handleOnChange = (event) => {
    this.isFormSubmitted = false;
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  /**  */
  render() {
    return (
      <div className="sign-form-sec">
        <h2> SIGN UP FORM </h2>
        <form method="POST" onSubmit={this.validateForm}>
          <div className="form-group">
            <label htmlFor="email"> Enter Email-Id : </label>
            <input
              className={
                this.isFormSubmitted
                  ? this.isEmailValid
                    ? 'form-control go-border'
                    : 'form-control error-border'
                  : 'form-control'
              }
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
            {this.isFormSubmitted &&
              (this.isEmailValid ? (
                <p className="go-font"> You typed valid email </p>
              ) : (
                <p className="error-font"> You typed Invalid email </p>
              ))}
          </div>

          <div className="form-group">
            <label htmlFor="passwd"> Enter Password : </label>
            <input
              className={
                this.isFormSubmitted
                  ? this.isPwsWeak
                    ? 'form-control go-border'
                    : 'form-control error-border'
                  : 'form-control'
              }
              type="password"
              name="passwd"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
            {this.isFormSubmitted &&
              (this.isPwsWeak ? (
                <p className="go-font"> Your password is strong</p>
              ) : (
                <p className="error-font"> Your password is too weak </p>
              ))}
          </div>

          <div className="form-group">
            <label htmlFor="nationality"> Choose nationality : </label>
            <select
              className="form-control"
              value={this.state.nationality}
              id="nationality"
              name="nationality"
              onChange={this.handleOnChange}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">France</option>
            </select>
          </div>

          <button className="btn btn-primary btn-block w-25"> Sign Up </button>
        </form>
        {this.isFormSubmitted && (
          <div className="text-left float-left pt-2">
            <h3> {this.state.greeting} </h3>
            <h3> Your email is: {this.state.email} </h3>
            <h3>
              Your email is {this.isEmailValid ? '   CORRECT' : '  INCORRECT'}
            </h3>
          </div>
        )}
        <br />
      </div>
    );
  }
}
