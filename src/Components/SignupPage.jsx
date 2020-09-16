import React, { useState } from 'react'

const SignupPage = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [nationality, setNationality] = useState("")

    return (
        <div>
            <form>
                <label>Email</label>
                <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} />
                <label>Password</label>
                <input type="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                <label>Nationality</label>
                <select type="text" name="nationality" onChange={(event) => setNationality(event.target.selectedOptions[0].value)} >
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>
                <button>Sign Up</button>
            </form>
            { nationality === 'de' && <p>Hallo</p>}
            { nationality === 'en' && <p>Hello</p>}
            { nationality === 'fr' && <p>Bonjour</p>}
            { email && <p>Your email address is: {email}</p>}
            {(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email) && <p>Your email address is correct</p>}
        </div>

    )
}

export default SignupPage
