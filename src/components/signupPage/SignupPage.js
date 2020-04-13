import React, {Component} from 'react';
import './index.css';

class SignupPage extends Component {

  state = {
    email : false,
    password: false,
  };

  _validateEmail = (value) => {
    if (this._validateString(value)) {
      this.setState({
        email: value
      })
    } else {
      this.setState({
        email: false
      })
    }
  };

  _validateString(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
  }

  _validatePassword = (password) => {
    if (password.length > 5) {
      this.setState({
        password
      })
    } else {
      this.setState({
        password: false,
      })
    }
  };

  render() {
    return (
      <div className={'signUpPage'}>
        <div className={'form-group'}>
          <label>Email</label>
          <input className={!this.state.email ? 'error' : 'ok'} onKeyUp={(e) => this._validateEmail(e.currentTarget.value) } type="text" name={'email'}/>
        </div>
        <div className={'form-group'}>
          <label>Password</label>
          <input className={!this.state.password ? 'error' : 'ok'} onKeyUp={(e) => this._validatePassword(e.currentTarget.value) } type="password" name={'password'}/>
        </div>
        <div className={'form-group'}>
          <label>Nationality</label>
          <select name="nationality" id="">
            <option value="de" defaultValue={true}>Germany</option>
            <option value="en" >English</option>
            <option value="fr" >French</option>
          </select>
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default SignupPage;