import React, { Component } from 'react';
import style from './SignupPage.module.css';

export default class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: 'en'
  }

  onInputChangeHandler = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    let greeting;
    switch (this.state.nationality) {
      case "de":
        greeting = "Hallo";
        break;
      case "en":
        greeting = "Hello";
        break;
      case "fr":
        greeting = "Bonjour";
        break;
      default:
        greeting = "Hello";
    }

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.state.email);
    const isPwdStrong = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(this.state.password);

    return (
      <div className={style.container}>
        <form>
          <div className={`
            ${style.email}
            ${isEmailValid && style.validInput}
            ${!isEmailValid && style.invalidInput}
          `}>
            <label>Email</label>
            <input onChange={this.onInputChangeHandler} type="email" name="email" value={this.state.email} />
            {isEmailValid ? <span>You typed a valid email</span> : <span>Invalid email address</span>}
          </div>

          <div className={`
            ${style.password}
            ${isPwdStrong && style.validInput}
            ${!isPwdStrong && style.invalidInput}
          `}>
            <label>Password</label>
            <input onChange={this.onInputChangeHandler} type="password" name="password" value={this.state.password} />
            {isPwdStrong ? <span>Your password is strong</span> : <span>Your password is too weak</span>}
          </div>

          <div>
            <label>Nationality</label>
            <select onChange={this.onInputChangeHandler} name="nationality" value={this.state.nationality}>
              <option value="en">English</option>
              <option value="de">German</option>           
              <option value="fr">French</option>
            </select>
          </div>

          <button>Sign up</button>
        </form>

        <div>
          <span>{greeting}</span>
          <span>Your email address is: {this.state.email}</span>
          {isEmailValid && <span>Your email address is correct</span>}
        </div>
      </div>
    )
  }
}
