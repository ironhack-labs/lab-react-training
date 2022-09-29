import { Component } from 'react';
import './SignupPage.css';
import Greeting from './../Greeting/Greeting';

export default class SignupPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    nationality: '',
    message:'',
    confirmMsg: false,
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, confirmMsg: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();  

    if (this.state.nationality === 'de') {
      this.setState({ message: 'Ihre E-Mail ist ' }); 
    }

    if (this.state.nationality === 'en') {
      this.setState({ message: 'Your email is ' }); 
    }

    if (this.state.nationality === 'es') {
      this.setState({ message: 'Tu email es ' }); 
    }

    if (this.state.nationality === 'fr') {
      this.setState({ message: 'Votre e-mail est ' }); 
    }

    this.setState({ confirmMsg: true });
  };

  render() {
    const { name, email, nationality, message, confirmMsg } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="Form-container">
          <select onChange={this.handleOnChange} name="nationality">
            <option value="default" defaultValue>
              Country
            </option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
          <input
            onChange={this.handleOnChange}
            name="name"
            type="text"
            placeholder="Name"
          ></input>
          <input
            onChange={this.handleOnChange}
            name="email"
            type="email"
            placeholder="Email"
            required
          ></input>
          <input
            onChange={this.handleOnChange}
            name="password"
            type="password"
            placeholder="Password"
          ></input>
          <button type="submit">Submit</button>
        </form>
        {confirmMsg ? (
          <div>
            <Greeting lang={nationality}>{name}</Greeting>
            <strong>{message}{email}</strong>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
}
