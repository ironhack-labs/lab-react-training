import React, { Component } from 'react';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nationality: '',
    };
  }

  handleChange = (event) => {
    console.log('event', event);
    this.setState({
      [event.target.name]: event.target.value,
      //   password: event.target.value.password,
      //   nationality: event.target.value.nationality,
    });
  };

  render() {
    let greetings =
      this.state.nationality === 'fr'
        ? 'Bonjour'
        : this.state.nationality === 'en'
        ? 'Hello'
        : this.state.nationality === 'de'
        ? 'Hallo'
        : '';
    //  if (this.state.nationality === 'en') {
    //    return 'Hello';
    // } else if (this.state.nationality === 'de') {
    //   return 'Hallo';
    // } else if (this.state.nationality === 'fr') {
    //   return 'Bonjour';
    // }

    return (
      <div>
        <form>
          <label>Email</label>
          <input
            className="border border-black-200 rounded-md mx-4"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            className="border border-black-200 rounded-md mx-4"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Nationality</label>
          <select
            name="nationality"
            value={this.state.nationality}
            onChange={this.handleChange}
          >
            <option value="en">--</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
          </select>
          <button
            className="border border-black-300  bg-green-400 p-2 rounded-md mx-4"
            type="submit"
          >
            Submit
          </button>
          <p>{greetings}</p>
          <p> Your email is {this.state.email}</p>
        </form>
      </div>
    );
  }
}

export default SignupPage;
