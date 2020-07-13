import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helloText: 'Hello',
      email: '',
      emailValid: false,
      emailColor: 'red',
      emailMsg: '',
      passMsg: '',
      passColor: 'red',
    };
  }
  emailOnChange(_email) {
    this.setState({
      email: _email.target.value,
      emailValid: _email.target.checkValidity(),
      emailColor: _email.target.checkValidity() ? 'green' : 'red',
      emailMsg: _email.target.checkValidity()
        ? 'You typed a correct email'
        : 'You typed an incorrect email',
    });
  }
  passOnChange(_pass) {
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    const mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );
    if (strongRegex.test(_pass.target.value)) {
      this.setState({
        passMsg: 'You typed a strong password',
        passColor: 'green',
      });
    } else if (mediumRegex.test(_pass.target.value)) {
      this.setState({
        passMsg: 'You typed a soft password',
        passColor: 'orange',
      });
    } else {
      this.setState({
        passMsg: 'You typed a easy password',
        passColor: 'red',
      });
    }
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
          <small id="emailHelpId" style={{ color: this.state.emailColor }}>
            {this.state.emailMsg}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            aria-describedby="passHelpId"
            id="password"
            placeholder="Put yor password"
            onChange={(e) => this.passOnChange(e)}
          />
          <small id="passHelpId" style={{ color: this.state.passColor }}>
            {this.state.passMsg}
          </small>
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
