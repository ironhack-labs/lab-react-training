import { useState } from 'react'


const SignupPage = () => {

    const [email, setEmail] = useState("")
    const [passWord, setPassword] = useState("")
    const [nationality, setNationality] = useState("")

    const handleEmailEvent = (e) => setEmail(e.target.value) 
    const handlePasswordEvent = (e) => setPassword(e.target.value) 
    const handleNationalityEvent = (e) => setNationality(e.target.value) 

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#DCDCDF"
        }

    const labelStyle = {
        padding: 15
    }

    const handleSubmit = (e) => {

        e.prevemtDefault()


        const newForm = {
            email,
            passWord,
            nationality
        }

        setEmail("")
        setPassword("")
        setNationality("")

    }


  return (
    <div >
    <h1>FORM</h1>
        <form onSubmit={handleSubmit} style={divStyle}>

        <label style={labelStyle}>Email
        <input onChange={handleEmailEvent} type="text" value={email}></input>
        </label>
        {email.length < 4 ? <span style={{color: "red"}}>You typed a wrong email</span> : <span style={{color: "green"}}>You typed a good email</span>}

        <label style={labelStyle}>Password
        <input onChange={handlePasswordEvent} type="password" value={passWord}></input>
        </label>
        {passWord.length < 4 ? <span style={{color: "red"}}>Your password is too weak</span> : <span style={{color: "green"}}>Your password is good</span>}


        <label style={labelStyle}>Nationality
        <select onChange={handleNationalityEvent} type="text" >
           
            <option value={nationality}>EN</option>
            <option value={nationality}>DE</option>
            <option value={nationality}>FR</option>

        </select>
        </label>

        <button type="submit">Send</button>

        <hr></hr>

        <h3>Your email is {email}</h3>
        <h3>{email.length < 4 ? <span>Your email is not correct</span> : <span>Your email is correct</span>}</h3>

        </form>


       
    </div>
  )
}

export default SignupPage