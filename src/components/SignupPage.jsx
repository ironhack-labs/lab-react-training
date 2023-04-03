import React, { useState } from 'react'

function SignupPage() {

  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [countrySelected, setCountrySelected] = useState('English')
  const [lang, setLang] = useState('')
  const [finalEmail, setFinalEmail] = useState('')
  

  const handleOnChangeEmail = (event) => {
    const { value } = event.target
    setEmailInput(value)
  }

  const handleOnChangePassword = (event) => {
    const { value } = event.target
    setPasswordInput(value)
  }


  const handleOnChangeCountry = (event) => {
    const { value } = event.target
    setCountrySelected(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    switch (countrySelected) {
      case "German":
        setLang("Hallo");
        break;
      case "English":
        setLang("Hello");
        break;
      case "French":
        setLang("Bonjour");
        break;
      default:
        setLang('')
    }
    setFinalEmail(emailInput)
  }

 

  return (
    <div className='mb-4'>
      <div className='mb-3'>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className='mb-2'> 
            <div>
            <label htmlFor="email" className='me-1'>Email</label>
            </div>
            <input type="email" className={emailInput.type === "email" ? "is-valid" : "is-invalid"} onChange={handleOnChangeEmail} value={emailInput} />
          </div>
          <div className='mb-2'>
            <div>
              <label htmlFor="password" className='me-1'>Password</label>
            </div>
            <input type="password" onChange={handleOnChangePassword} value={passwordInput} />
          </div>
          <div className='mb-2'>
            <div>
              <label htmlFor="Nationality">Nationality</label>
            </div>
            <select name="Countries" id="Select" value={countrySelected} onChange={handleOnChangeCountry}>
              <option value="German">German</option>
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
          <button type='submit' className='btn btn-primary'>Sign Up</button>
        </form>
        <hr />
        <p>{lang}</p>
        <p>Your email addres is : {finalEmail}</p>
        <p>Your email addres is correct </p>
      </div>
    </div>
  )
}

export default SignupPage