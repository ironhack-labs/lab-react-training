import { useState } from "react";
import './SignupPage.css'

const SignupPage = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [nationality, setNationality] = useState("English")
const [error, setError] = useState(null);
const [color, setColor] = useState(null);

const handleNationality = (e) => {
    if(e.target.value === "English"){
        setNationality("English")
    } else if (e.target.value === "German"){
            setNationality("German")
    } else if (e.target.value === "French"){
        setNationality("French")
    }
}

const isValidEmail= email => {
    return /\S+@\S+\.\S+/.test(email);
  }

const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

    return <div>
        <input type="email" className={!isValidEmail ? 'red' : 'green' } onChange={(e) => handleChange(e)}></input>
        <input type="password"></input>
        <select onChange={(e) => handleNationality(e)}>
            <option>English</option>
            <option>German</option>
            <option>French</option>
        </select>

        {nationality === "English" && <p>Hello</p>}
        {nationality === "German" && <p>Hallo</p>}
        {nationality === "French" && <p>Bonjour</p>}

        <p>Your email is {email}</p>

        {error && <h2 style={{color: 'red'}}>{error}</h2>}
    </div>
        
    }

    export default SignupPage;