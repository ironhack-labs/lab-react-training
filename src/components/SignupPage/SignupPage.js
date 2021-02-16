import React from 'react';

function SignupPage(){
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [nationality, setNationality] = React.useState('')
  const [errorEmail, setErrorEmail] = React.useState("")
  const [errorPassword, setErrorPassword] = React.useState("")
  const [submit, setSubmit] = React.useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target;
    if(name === 'email'){
      setEmail(value);

    } else if (name === 'password'){
      setPassword(value)

    } else {
      setNationality(value)

    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (validate()){
      setSubmit(true)
    }
  }
  const validate = () => {
    let isValid = true;
    if (!email){
      isValid = false;
      setErrorEmail("Please enter your email")
    }
    if (!password){
      isValid = false;
      setErrorPassword("Please enter your password")
    }
    
    if (typeof email !== "undefined") {
      let pattern = new RegExp(/^\S+@\S+\.\S+$/);
      if (!pattern.test(email)) {
        isValid = false
        setErrorEmail("Please enter valid email address.")
      }
    } else if (typeof password !== "undefined"){
      let pattern1 = new RegExp("^(?=.*[A-Z])")
      if (!pattern1.test(password)) {
        isValid = false
        setErrorPassword("Please enter valid password.")
      }
    }
    return isValid
  }
  const greetings = {
    English: "Hello",
    Deustchland: "Hallo",
    French: "Bonjour"
  }
  console.log(submit)
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
          <input 
            type='email'
            name='email'
            placeholder='youremail@gmail.com'
            value={email}
            onChange={handleChange}
          />
        <div className="text-danger">{errorEmail}</div>
        <label>Password</label>
          <input 
            type='password'
            name='password'
            placeholder='Your password'
            value={password}
            onChange={handleChange}
          />
        <div className="text-danger">{errorPassword}</div>
        <label>Nationality</label>
          <select 
            name="nationality"
            value={nationality}
            onChange={handleChange}
          >
            <option value='English'>English</option>
            <option value='Deustchland'>Deustchland</option>
            <option value='French'>French</option>
          </select>
        <button type='submit'>Sign up</button>
      </form>
      {submit ? (<article>
          <p>{greetings[nationality]}</p>
          <p>Your email is {email}</p>
          <p>Your email address is correct</p>
        </article>) : (<p>Please enter your credentials</p>)}
    </div>
  )
}

export default SignupPage