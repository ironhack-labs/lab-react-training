import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default class signedIn extends Component {
  state = {
    signedIn: false,
    email: '',
    password: '',
    nationality: '',
    greet: '',
  };

  validateForm = (event) => {
    event.preventDefault();
    const { email, password, nationality } = this.state;
   
    this.signedIn = true;
    let greet = '';
    switch (nationality) {
      case 'en':
        greet = 'Hello';
        break;
      case 'it':
        greet = 'Ciao';
        break;
      case 'fr':
        greet = 'Bonjour';
        break;
      default:
        greet = 'Hello';
    }

    this.setState({
      email,
      password,
      nationality,
      greet,
    });
  };

  handleInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  /**  */
  render() {
    return (
      <div className='signup container'>
        <form method="POST" onSubmit={this.validateForm} className='signup'>
          <label htmlFor="email"> Enter email : </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputs}
            placeholder = 'ddd@sss.com'
          />
          <label htmlFor="password"> Enter Password : </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputs}
            placeholder = '*********'
          />
          <label htmlFor="nationality"> Choose nationality : </label>

          <select
            value={this.state.nationality}
            id="nationality"
            name="nationality"
            onChange={this.handleInputs}
          >
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="fr">France</option>
          </select>
<br/>
          <button className="btn btn-primary mb-2"> Sign Up </button>
        </form>
        {this.signedIn && (
          <div>
            <h3> {this.state.greet} </h3>
            <h3> Your email address is: {this.state.email} </h3>
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
