import React, { Component } from 'react';
import Greetings from '../Greetings';

const LANGUAGES = ['en', 'de', 'fr']

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: '',
    submittedSuccesfully: false,
    submittedWithErrors: false,
    errors: {}
  }

  handleErrors = () => {
    const {errors} = this.state
    if(!this.state.email) {
      errors.email = 'Please enter a valid email'
    } else if(this.state.password.length <= 0) {
      errors.password = 'The password is too weak'
    } else if(!this.state.nationality) {
      errors.nationality = 'Please enter a nationality'
    }
  }

  handleInteraction = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.handleErrors()
    if(this.state.errors.length === 0) {
      this.setState({submittedSuccesfully: true})
    } else {
      this.setState({submittedWithErrors: true})
    }
  }

  render() {
    const {errors} = this.state
    return (
      <div className='SignupPage'>
        <form className='ms-2 me-2'>
          <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} type='email' name='email' onChange={this.handleInteraction}></input>
          {this.state.submittedWithErrors && <div className='invalid-feedback'>
            {errors.email}
          </div>}
          <input className={`mt-2 mb-2 form-control ${errors.password ? 'is-invalid' : ''}`} type='password' name='password' onChange={this.handleInteraction}></input>
          <div className='invalid-feedback'>
            {errors.password}
          </div>
          <select className={`form-control mb-2 w-50 form-select ${errors.nationality ? 'is-invalid' : ''}`} onChange={this.handleInteraction} name='nationality'>
            <option value=''>Choose a nationality</option>
            {LANGUAGES.map(language => {
              return <option value={language} key={language}>{language}</option>
            })}
          </select>
          <div className='invalid-feedback'>
            {errors.nationality}
          </div>
          <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Sign up</button>
        </form>
        {this.state.submittedSuccesfully && <div>
          <Greetings lang={this.state.nationality}>
            <br/> Your email address is: {this.state.email} <br/>
            Your email address is correct
          </Greetings>
        </div>}
      </div>
    );
  }
}

export default SignupPage;