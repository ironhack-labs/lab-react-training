import React, { Component } from "react";
import './styles.css'

class SignupPage extends Component {
  
  state = {
    email: '',
    password: '',
    nationality: 'en',
    mailHandler: undefined,
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handlePassInput = (e) => {
    this.setState({
      email: e.target.value,
    })
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(this.state.email)) {
      console.log('hola?')
      this.setState({mailHandler: true});
    } else {
      this.setState({mailHandler: false});
    }
  }

  greetings = () => {
    const { nationality } = this.state;
    if (nationality === 'en') {
      return 'Hello';
    } else if (nationality === 'de') {
      return 'Hallo';
    } else {
      return 'Bonjour';
    }
  }

  correctEmail = () => {
    if (this.state.mailHandler === false) {
      return 'incorrect';
    } else {
      return 'correct';
    }
  }

  emailClass = () => {
    if (this.state.mailHandler === undefined) {
      return 'mailGrey';
    } else if (this.state.mailHandler === true) {
      return 'mailGreen';
    } else {
      return 'mailRed';
    }
  }
  
  render () {
    const { email, password } = this.state;
    // let emailClass = this.state.mailHandler ? 'mailGreen': 'mailRed';
    return (
      <div className="form">
        <form>
          <div>
            <label>Email</label>
            <div>
              <input className={this.emailClass()} type="mail" name="email" placeholder="Email" value={email} onChange={this.handlePassInput}/>
            </div>
          </div>
          <div>
            <label>Pasword</label>
            <div>
              <input type="text" name="password" placeholder="Pasword" value={password} onChange={this.handleInput}/>
            </div>
          </div>
          <div>
            <label>Nationality</label><br></br>
            <select name="nationality" onChange={this.handleInput}>
              <option value="en">England</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
            </select>
          </div>
          <input className="button is-normal is-success" type="submit" value="Sign Up" />
        </form>
        <p>{this.greetings()}</p>
        <p>Your email address is: {this.state.email}</p>
        <p>Your email address is {this.correctEmail()}</p>
        <p></p>
      </div>
    )
  }
}

export default SignupPage;