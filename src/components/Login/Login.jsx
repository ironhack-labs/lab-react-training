import React, { Component } from 'react';

export class Login extends Component {
  state = {
    isFormValid: false,
    email: undefined,
    isEmailValid: null,
    password: undefined,
    isPasswordValid: false,
  };
  submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem('loggedIn', '1');
    this.props.onSubmitClick(this.state.email);
  };
  regExEmailCheck = (str) => {
    const emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let emailCheck = emailRegEx.test(str);
    return emailCheck;
  };
  regExPasswordCheck = (str) => {
    const passwordRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let passwordCheck = passwordRegEx.test(str);
    return passwordCheck;
  };
  emailInputHandler = (event) => {
    const input = event.target.value;
    let check = this.regExEmailCheck(input);
    this.setState({ email: input });
    if (check) {
      this.setState({ isEmailValid: true });
      if (this.state.isPasswordValid) {
        this.setState({ isFormValid: true });
      }
    } else {
      this.setState({ isEmailValid: false, isFormValid: false });
    }
  };
  passwordInputHandler = (event) => {
    const input = event.target.value;
    let check = this.regExPasswordCheck(input);
    this.setState({
      password: input,
    });
    if (check) {
      this.setState({
        isPasswordValid: true,
      });
      if (this.state.isEmailValid) {
        this.setState({ isFormValid: true });
      }
    } else {
      this.setState({
        isPasswordValid: false,
        isFormValid: false,
      });
    }
  };

  render() {
    return (
      <div className="border-box">
        <form action="" onSubmit={this.submitHandler}>
          <label value="" className="">
            Email-Address:
          </label>
          <input
            className={`${
              this.state.isEmailValid ? 'validLabel' : 'unvalidLabel'
            }`}
            onChange={this.emailInputHandler}
            type="email"
            placeholder="e.g. max@max.de"
            name="email"
          />
          <label value="">Password: </label>
          <input
            onChange={this.passwordInputHandler}
            className={`${
              this.state.isPasswordValid ? 'validLabel' : 'unvalidLabel'
            }`}
            type="password"
            name="password"
          />
          <button type="submit" disabled={!this.state.isFormValid}>
            Submit Form!
          </button>
        </form>

        <ul className="password-check">
          <li>
            <span>
              <p className="fa">
                {this.state.isPasswordValid ? '\uf058' : '\uf057'}
              </p>
              min. eight characters
            </span>
          </li>

          <li>
            <span>
              <p className="fa fa-7x">
                {this.state.isPasswordValid ? '\uf058' : '\uf057'}
              </p>
              min. one uppercase letter
            </span>
          </li>

          <li>
            <span>
              <p className="fa">
                {this.state.isPasswordValid ? '\uf058' : '\uf057'}
              </p>
              min. one lowercase letter
            </span>
          </li>

          <li>
            <span>
              <p className="fa">
                {this.state.isPasswordValid ? '\uf058' : '\uf057'}
              </p>
              min. one Number !
            </span>
          </li>

          <li>
            <span>
              <p className="fa">
                {this.state.isPasswordValid ? '\uf058' : '\uf057'}
              </p>
              one special character from ! @ # $ % ^ & *
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Login;
