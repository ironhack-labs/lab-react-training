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
          <label>
            <strong>Email</strong>
          </label>
          <input
            className="border border-black-200 rounded-md m-2 "
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br></br>
          <label>
            <strong>Password</strong>
          </label>
          <input
            className="border border-black-200 rounded-md m-2"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br></br>
          <label>
            <strong>Nationality</strong>
          </label>
          <select
            name="nationality"
            value={this.state.nationality}
            onChange={this.handleChange}
            className="border border-black-200 rounded-md m-2"
          >
            <option value="en">--</option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">Franch</option>
          </select>
          <br></br>
          <button
            className="border border-black-300  bg-green-400 p-2 rounded-md m-4"
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
