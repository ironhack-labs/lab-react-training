import React, {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function SignupPage({

}){



  // function useInput(initialState) {
  //   const [value, setValue] = useState(initialState)
  //   const onChange = ({ target: { value: inputVal } }) => {
  //     setValue(inputVal)
  //   }
  //   return { value, onChange }
  // }

  // const emailInput = useInput('')
  // const passwordInput = useInput('')
  // const countryInput = useInput('')

  // function handleFormSubmit(event){
  //   event.preventDefault()
  //   const id = (Math.floor(Math.random() * 100000) + 1).toString(16)
  //   addNewUser({
  //     email: emailInput.value,
  //     password: passwordInput.value,
  //     nationality: countryInput.value
  //   })
  // }

  function handleFormSubmit(event){
    console.log()
  }
  function handleInputChange(event){
    
    console.log(event.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Email</label>
        <input 
          type='email' 
          name='email' 
          id='email' 
          placeholder='Email' 
          onChange={handleInputChange}/>
      </div>

      <div>
        <label>Password</label>
        <input 
          type='password' 
          name='password' 
          id='password' 
          placeholder='' 
          onChange={handleInputChange}/>
      </div>

      <div>
        <label>Nationality</label>
        <select 
          name='nationality' 
          id='nationality' 
          value='ES' 
          onChange={handleInputChange}>
            <option value='DE'>Germany</option>
            <option value='ES'>Mexico</option>
            <option value='ES'>Spain</option>
            <option value='FR'>France</option>
            <option value='EN'>USA</option>
        </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}