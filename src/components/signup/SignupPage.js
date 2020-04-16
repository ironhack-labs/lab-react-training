import React, { Component } from "react";


class SignupPage extends Component {
  
  state = {
    email: '',
    password: '',
    nationality: 'en',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
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
  
  render () {
    const { email, password } = this.state;
    return (
      <div className="form">
        <form>
          <div>
            <label>Email</label>
            <div>
              <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInput}/>
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
        <p></p>
      </div>
    )
  }
}

export default SignupPage;