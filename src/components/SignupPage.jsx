import { useState } from "react"

/* eslint-disable react/prop-types */
function SignupPage() {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ nationality, setNationality ] = useState("en")

    return (
        <div>
            <form className="signup">
                <label>Email</label>
                <input type="email" onChange={(event)=> setEmail(event.target.value)}></input>

                <label>Password</label>
                <input type="password" onChange={(event)=> setPassword(event.target.value)}></input>

                <label>Nationality</label>
                <select onChange={(event)=> setNationality(event.target.value)}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>

                <button type="submit">Sign up</button>
            </form>
            <hr></hr>
            <p>{nationality == 'en' ? "Hello" : nationality == 'de' ? "Hallo" : "Bonjour"}</p>
            <p>Your email is {email}</p>
        </div>
    )
}

export default SignupPage