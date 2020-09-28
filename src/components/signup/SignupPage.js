import React, { Component } from 'react';

export default class SignupPage extends Component {
  state = {
    userArray: [],
    email: '',
    password: '',
    nationality: '',
    greeting: '',
    holdEmail: '',
  };

  //this is 1 behind the correct value???
  handleGreeting = () => {
    let greetings = '';
    switch (this.state.nationality) {
      case 'en':
        greetings = 'Hello';
        break;
      case 'de':
        greetings = 'Hallo';
        break;
      case 'fr':
        greetings = 'Bonjour';
        break;
      default:
        greetings = 'Hola';
    }
    console.log(`Greetings`, greetings);
    this.setState(
      {
        greeting: greetings,
      },
      () => console.log(this.state.greeting)
    );
  };

  handleOnChange = (event) => {
    // console.log(event);
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => console.log(this.state.nationality)
    );
  };

  handleOnSubmit = (event) => {
    this.handleGreeting();
    //prevents rerender of whole page

    event.preventDefault();
    const { email, password, nationality } = this.state;

    const newUserArray = [
      { newEmail: email, newPassword: password, newNationality: nationality },
    ];
    //set state of userArray to newFoodArray
    //clear form (setState back to "")
    this.setState({
      userArray: newUserArray,
      email: '',
      holdEmail: email,
      password: '',
      nationality: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Sign Up!</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label>Email</label>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          ></input>
          <label>password</label>
          <input
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          ></input>
          <label>Nationality</label>

          <select name="nationality" onChange={this.handleOnChange}>
            <option value=""></option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          <div></div>

          <button>Sign Up</button>
        </form>
        <div>{this.state.greeting}</div>
        <div>Your email address is: {this.state.holdEmail}</div>
      </div>
    );
  }
}
