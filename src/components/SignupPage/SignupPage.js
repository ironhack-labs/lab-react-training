import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { helloText: 'Hello', email: '', emailValid: false };
  }
  emailOnChange(_email) {
    this.setState({
      email: _email.target.value,
      emailValid: _email.target.checkValidity(),
    });
  }
  nationalityOnChange = (_nat) => {
    let _helloText = 'Hello';
    switch (_nat.target.value) {
      case 'de':
        _helloText = 'Hallo';
        break;
      case 'fr':
        _helloText = 'Bonjour';
        break;
      default:
        _helloText = 'Hello';
        break;
    }
    this.setState({ helloText: _helloText });
  };
  render() {
    return (
      <div className="">
        <div className="form-group">
          <label htmlFor="emal">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="Put your email address"
            onChange={(e) => this.emailOnChange(e)}
          />
          <small id="emailHelpId" className="form-text text-muted">
            Put your email address
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Put yor password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <select
            className="form-control"
            name="nationality"
            id="nationality"
            onChange={(e) => this.nationalityOnChange(e)}
          >
            <option value="en">England</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
        <hr />
        <span>{this.state.helloText}</span>
        <br />
        <span>Your email address is: {this.state.email}</span>
        <br />
        <span>
          Your email address is{' '}
          {this.state.emailValid ? 'correct' : 'not correct'}
        </span>
      </div>
    );
  }
}
export default SignupPage;
