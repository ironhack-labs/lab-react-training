import { useState } from "react";

const SignupPage = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [nationality, setNationality] = useState("")

const handleChange = (e) => {
    if(e.target.value === "English"){
        setNationality("English")
    } else if (e.target.value === "German"){
            setNationality("German")
    } else if (e.target.value === "French"){
        setNationality("French")
    }
}

    return <div>
        <input type="email"></input>
        <input type="password"></input>
        <select onChange={() => handleChange()}>
            <option>English</option>
            <option>German</option>
            <option>French</option>
        </select>
    </div>
        
    }

    export default SignupPage;