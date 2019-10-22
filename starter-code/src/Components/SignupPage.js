import React from 'react';
import Greetings from './Greetings';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: ''
  }

  onChangeHandlerEmail = (e) => {
    this.setState({ email: e.currentTarget.value })
  }

  onChangeHandlerPassword = (e) => {
    this.setState({ password: e.currentTarget.value })
  }

  onChangeHandlerNationality = (e) => {
    this.setState({ nationality: e.currentTarget.value })
  }

  render() {
    const emailMsg = this.state.email.length > 0 ? <p className="mailMsg">Your Email is: {this.state.email}</p> : ''
    const greetingMsg = this.state.nationality.length > 0 ? <Greetings lang={this.state.nationality} /> : ''

    return (
      <form className="signup">
        <input onChange={this.onChangeHandlerEmail} type="email" name="email" placeholder="email" />
        <input onChange={this.onChangeHandlerPassword} type="password" name="password" placeholder="password" />
        <select onChange={this.onChangeHandlerNationality} name="nationality" >
          <option value="">--Please choose a nationality--</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button type="submit">Sign up</button>
        {greetingMsg}
        {emailMsg}
      </form>
    )
  }
}

export default SignupPage;
