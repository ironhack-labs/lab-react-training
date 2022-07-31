import {useState} from 'react'
const SignupPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nationality, setNationality] = useState('')

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const newSubmit = {email, password}
    console.log('submited --->', newSubmit)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input 
        type="email"
        name="email"
        value={email}
        onChange={handleEmail}
      />
      <label>Password</label>
      <input 
        type="password"
        name="password"
        value={password}
        onChange={handlePassword} 
      />
      <label>Nationality</label>

      <button type='submit'>Submit</button>

    </form>
  );
}

export default SignupPage;