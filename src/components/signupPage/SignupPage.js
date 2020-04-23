import React, {Component} from 'react'
import '../signupPage/SignupPage.css'
import Greetings from '../greetings/Greetings'


class SignupPage extends Component {
  state = {
    email : "",
    password : "*******",
    nationality : "en",
    logued : false,
  }

  handleChangesInput = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  welcomeMessage = () => {
    this.setState({
      logued : true
    })
  }

  render(){
    const {email, password, nationality , logued} = this.state;

    return (
      <div className="signupPage">
        <div className="form">
          Email
          <p><input type="email" name="email" id="email" className="email-input" value={email} onChange={this.handleChangesInput} /></p>
          Password
          <p><input type="password" name="password" id="password" value={password} onChange={this.handleChangesInput} /></p>
          Nationality
          <select name="nationality" id="nationality" onClick={this.handleChangesInput}>
            <option value="en"> England </option>
            <option value="de"> Deutschland </option>
            <option value="fr"> France </option>
          </select>
          <p><button className="btn-form" onClick={this.welcomeMessage}>Sign Up</button></p>
        </div>

        <div className="welcome">
          {logued && <Greetings lang={nationality} children={email} />}
        </div>

      </div>
    )
  }
}

export default SignupPage