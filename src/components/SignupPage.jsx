import React, { useState } from 'react'

function SignupPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [greeting, setGreeting] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleNationalityChange = (event) => {
    setNationality(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (nationality) {
      case "German":
        setGreeting("Hallo!");
        break;
      case "French":
        setGreeting("Bonjour!");
        break;
      case "English":
        setGreeting("Hello!");
    };

    setUserEmail(`Your email is: ${email}`);

  }

  return (
    <>
      <form onSubmit={handleSubmit} className='border border-dark p-5 mb-2'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
        </div>

        <select className="form-select" aria-label="nationality" value={nationality} onChange={handleNationalityChange}>
          <option selected>Nationality</option>
          <option>English</option>
          <option>German</option>
          <option>French</option>
        </select>
        <button type="submit" className="btn btn-primary mt-3">Sign up</button>
      </form>

      <div className='mt-4'>
        <p>{greeting}</p>
        <p>{userEmail}</p>
      </div>
    </>

  )
}

export default SignupPage