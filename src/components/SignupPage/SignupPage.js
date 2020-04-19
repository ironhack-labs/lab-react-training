import React, { Component } from 'react';
import './SignupPage.css';


class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: 'en',
    show: false,
  }

  validateEmail = () => {
    const {email} = this.state;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      return  'Your mail is correct';
    } else {
      return 'Mail incorrect';
    }
  }

  handleInputMail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleInputPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSelectCountry = (e) => {
    console.log('dioma', e.currentTarget.value);
    this.setState({
      nationality: e.target.value,
    });
  }

  HandleForm = () => {
    const { show } = this.state; 
    this.setState({
      show: !show,
    })
  }

  displayUser = () => {
    const { nationality } = this.state;
    console.log('Nationality', nationality)
      if (nationality === "en") {
        return <span>Hello</span>;
      } else if (nationality === "fr") {
        return <span>Bonjour</span>;
      } else if(nationality ==='de') {
        return <span>Halo</span>;
      }
  }

  render () {
    const {email, password, show } = this.state;
    return (
      <div className="Form">
        <input
          className="Input"
          type="email"
          name="email"
          value={email}
          onChange={this.handleInputMail}
          placeholder="email"
        />
        <input
          className="Input"
          type="password"
          name="password"
          pattern=".{6,}"
          value={password}
          onChange={this.handleInputPassword}
          placeholder="password"
        />
        <select
          className="Input"
          name="nationality"
          onChange={this.handleSelectCountry}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button className="Submit" onClick={this.HandleForm}>
          Sign up
        </button>
        {show && 
        <div>
          <p>{this.displayUser()}</p>
          <p>{email === "" ? "" : `Your email address is: ${email}`}</p>
          <p>{this.validateEmail()}</p>
        </div>}
      </div>
    );
  } 
}

export default SignupPage; 