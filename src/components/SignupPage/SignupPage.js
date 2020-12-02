import React, { Component } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './SignupPage.css';

export default class SignupPage extends Component {
  state = {
    email: '',
    validEmail: 'normal',
    password: '',
    validPassword: 'normal',
    nationality: 'en',
    submitted: {
      show: 'hidden'
    }
  }

  handleEmail = (e) => {
    const userEmail = e.target.value;
    let isEmailValid; 
    
    if (userEmail.includes('@') && userEmail.includes('.com')) {
      isEmailValid = 'valid'; 
    } else {
      isEmailValid = 'error';
    }

    this.setState({ 
      email: userEmail,
      validEmail: isEmailValid
    })
  }

  handlePassword = (e) => {
    const userPassword = e.target.value;
    let isPasswordValid; 

    if (userPassword.length > 8) {
      isPasswordValid = 'valid'; 
    } else {
      isPasswordValid = 'error';
    }

    this.setState({ 
      password: userPassword,
      validPassword: isPasswordValid
    })
  }

  handleSelect = (e) => {
    this.setState({ 
      nationality: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); 

    if (this.state.validEmail === 'valid' && this.state.validPassword === 'valid') {
      this.setState({ 
        submitted: {
          show: 'show',
          email: this.state.email,
          nationality: this.state.nationality
        }
      })
    }    
  }

  render() {
    return (
      <div className='signup-page'>

        <form className='signup-form' onSubmit={this.handleSubmit}>

          <label htmlFor='email'>Email</label>
          <div className='input-field'>
            <input 
              onChange={this.handleEmail}
              value={this.state.email} 
              type='email' 
              name='email' 
              id='email' 
              className={this.state.validEmail}
            />
            {this.state.validEmail === 'error' && <span className='icon msg-error'><IoClose /></span>}
            {this.state.validEmail === 'valid' && <span className='icon msg-valid'><FaCheck /></span>}
          </div>
        
          {this.state.validEmail === 'error' && <p className='msg msg-error'>Your email is incorrect</p>}
          {this.state.validEmail === 'valid' && <p className='msg msg-valid'>You typed a valid email</p>}

          <label htmlFor='password'>Password</label>
          <div className='input-field'>
            <input 
              onChange={this.handlePassword}
              value={this.state.password} 
              type='password' 
              name='password' 
              id='password' 
              className={this.state.validPassword}
            />
            {this.state.validPassword === 'error' && <span className='icon msg-error'><IoClose /></span>}
            {this.state.validPassword === 'valid' && <span className='icon msg-valid'><FaCheck /></span>}
          </div>

          {this.state.validPassword === 'error' && <p className='msg msg-error'>Your password is too weak</p>}
          {this.state.validPassword === 'valid' && <p className='msg msg-valid'>You typed a valid password</p>}

          <label htmlFor='nationality'>Nationality</label>
          <select 
            onChange={this.handleSelect}
            value={this.state.nationality} 
            name='nationality' 
            id='nationality'
          >
            <option value='en'>English</option>
            <option value='de'>German</option>
            <option value='fr'>French</option>
          </select>

          <button className='signup-btn' type='submit'>
            Sign up
          </button>

        </form>

        <div className={'submitted-form ' + this.state.submitted.show}>

          <hr />

          {this.state.submitted.nationality === 'en' && <p>Hello</p>}
          {this.state.submitted.nationality === 'de' && <p>Hallo</p>}
          {this.state.submitted.nationality === 'fr' && <p>Bonjour</p>}

          <p>Your email address is: {this.state.submitted.email}</p>

          {this.state.validEmail === 'valid' && <p>Your email address is correct.</p>}

        </div>

      </div>
    )
  }
}
