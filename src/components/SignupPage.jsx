import { useState } from 'react'

const initialState = {
  email: '',
  password: '',
  nationality: ''
}

function SignupPage() {
  const [formData, setFormData] = useState(initialState)
  const [user, setUser] = useState(initialState)
  const [warning, setWarning] = useState(initialState)


  const handleErrors = (identifier, value) => {
    const pattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z]).{8,}$/;

    const updateWarning = (message) => {
      setWarning((prevWarning) => ({
        ...prevWarning,
        [identifier]: message,
      }))
    }

    switch (identifier) {
      case 'email':
        String(value).includes('@' && '.com') && String(value).length > 5
          ? updateWarning('')
          : updateWarning('Must be a valid email address')
        break
      case 'password':
        pattern.test(value)
          ? updateWarning('')
          : updateWarning('Your password is weaker than Yamcha')
        break
      case 'nationality':
        String(value) !== ''
          ? updateWarning('')
          : updateWarning('Must select an option')
        break
      default:
        break
    }
  }

  const handleFormInput = (identifier, value) => {
    handleErrors(identifier, value)
    setFormData((prevFormData) => ({ ...prevFormData, [identifier]: value }))
  }

  const handleOnSubmit = (e) => { 
    e.preventDefault()

    if (!warning.email && !warning.password && !warning.nationality && formData.email && formData.password && formData.password) {
      setUser(formData)
      setFormData(initialState)
      console.log(formData)
    } else {
      handleErrors('email', formData.email)
      handleErrors('password', formData.password)
      handleErrors('nationality', formData.nationality)
    }
  }

  const setMessage = (user) => {
    const { email, nationality } = user

    const message = <div>
      <p>Your email address is: {email}</p>
      <p>Your email address is correct</p>
    </div> 
    
    switch (nationality) {
      case 'en': 
        return (
          <div>
            <p>Hello</p>
            {message}
          </div>
        );
      case 'de':
        return (
          <div>
            <p>Hallo</p>
            {message}
          </div>
        );
      case 'fr':
        return (
          <div>
            <p>Bonjour</p>
            {message}
          </div>
        );
      default: break
    }
  }

  return (
    <div className="SignupPage">
      <form
        onSubmit={handleOnSubmit}
      >
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => handleFormInput('email', e.target.value)}
          style={
            !warning.email && formData.email.length === 0
              ? { border: '3px solid gray', borderRadius: 5 }
              : warning.email
              ? { border: '3px solid red', borderRadius: 5 }
              : { border: '3px solid green', borderRadius: 5 }
          }
        />
        <p className="warning">{warning.email}</p>

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleFormInput('password', e.target.value)}
          style={
            !warning.password && formData.password.length === 0
              ? { border: '3px solid gray', borderRadius: 5 }
              : warning.password
              ? { border: '3px solid red', borderRadius: 5 }
              : { border: '3px solid green', borderRadius: 5 }
          }
        />
        <p className="warning">{warning.password}</p>

        <label>Nationality:</label>
        <select
          name="nationality"
          id="nationality"
          onChange={(e) => handleFormInput('nationality', e.target.value)}
          value={formData.nationality}
          style={
            !warning.nationality && formData.nationality.length === 0
              ? { border: '3px solid gray', borderRadius: 5 }
              : warning.nationality
              ? { border: '3px solid red', borderRadius: 5 }
              : { border: '3px solid green', borderRadius: 5 }
          }
        >
          <option value=""></option>
          <option value="en">American</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <p className="warning">{warning.nationality}</p>

        <button
          type="submit"
          style={{
            backgroundColor: 'blueviolet',
            border: 'none',
            color: 'white',
            fontSize: 20,
            padding: '10px 0px',
            borderRadius: 6,
            width: 100,
          }}
        >
          Sign up
        </button>
      </form>
      <hr />
      {setMessage(user)}
    </div>
  )
}

export default SignupPage