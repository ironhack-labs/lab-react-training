import React, { useState } from 'react'

let textLang = ''
let finalEmail = ''

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const handleChangeEmail = (ev) => {
    setEmail(ev.target.value)
  }

  const handleChangePw = (ev) => {
    setPassword(ev.target.value)
  }

  const handleChangeNat = (ev) => {
    setNationality(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(nationality === 'De') {
      textLang = 'Hallo'
    } else if (nationality === 'Fr') {
      textLang = 'Bonjour'
    } else if (nationality === 'En'){
      textLang = 'Hello'
    }
    finalEmail = email
    setEmail('');
    setPassword('');
    setNationality()
  }

  


  return (
    <div className='d-flex flex-column justify-content-start'>
      <form onSubmit={handleSubmit} className='border border-dark p-5 mb-2'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input value={email} onChange={handleChangeEmail} type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input value={password} onChange={handleChangePw} type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="Select" className="form-label">Select nationality</label>
          <select value={nationality} onChange={handleChangeNat} id="Select" className="form-select">
            <option></option>
            <option>En</option>
            <option>De</option>
            <option>Fr</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <div>
        <p>{textLang}</p>
        <p>{`Your email is: ${finalEmail}`}</p>
      </div>
    </div>
  )
}

export default SignupPage