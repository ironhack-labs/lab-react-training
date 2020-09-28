import React, { Component } from 'react';
import './SignUp.css';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    nationality: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isPwWeak = () => {
    const mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );
    return mediumRegex.test(this.state.password) ? false : true;
  };

  isEmailWeak = () => {
    const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    return emailRegex.test(this.state.email) ? false : true;
  };

  cancelSubmit = (e) => {
      e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.cancelSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              name="email"
              className={
                this.isEmailWeak()
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="john@email.com"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            <div className="valid-feedback" >
                Email accepted!
            </div>
            <div className="invalid-feedback" >
                Invalid email
            </div>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className={
                this.isPwWeak()
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder="password123"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <div className="valid-feedback" >
                Password accepted!
            </div>
            <div className="invalid-feedback" >
                Password not strong enough
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Nationality</label>
            <select
              className="form-control"
              name="nationality"
              id="exampleFormControlSelect1"
              onChange={this.handleInputChange}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <hr />
          <p>
            {this.state.nationality === ''
              ? 'Hello!'
              : this.state.nationality === 'en'
              ? 'Hello!'
              : this.state.nationality === 'de'
              ? 'Hallo!'
              : this.state.nationality === 'fr'
              ? 'Bonjour!'
              : null}
          </p>
          <p>{this.state.nationality === ''
              ? 'Your email is: ' + this.state.email
              : this.state.nationality === 'en'
              ? 'Your email address is: ' + this.state.email
              : this.state.nationality === 'de'
              ? 'Dein email address ist: ' + this.state.email
              : this.state.nationality === 'fr'
              ? 'Votre adresse e-mail est: ' + this.state.email
              : null}</p>
        </form>
      </div>
    );
  }
}
