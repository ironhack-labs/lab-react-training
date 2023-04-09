import { useState } from "react";

function SignupPage() {

    const [email, setEmail] = useState("")
    const [nationality, setNationality] = useState("")

    function handleSelect(e) {
        setNationality(e.target.value)        
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    let greeting

    switch(nationality) {
        case "en":
            greeting = "Hello!";
            break;
        case "de":
            greeting = "Hallo!";
            break;
        case "fr":
            greeting = "Bonjour!";
            break;
        default:
            greeting = "Hello!"
    }


    return (
        <div className="signupPageDiv">
            <label htmlFor="emailInput">Email</label>
            <input type="email" name="" id="emailInput" onChange={handleEmailChange}/>
            <label htmlFor="passwordInput">Password</label>
            <input type="password" name="" id="passwordInput" />
            <label htmlFor="nationalityInput">Nationality</label>
            <select name="" value={nationality} id="nationalityInput" onChange={handleSelect}>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
            </select>
            <button className="signupPageButton">Sign up</button>
            <hr />
            <p>{greeting}</p>
            <p>Your email address is: {email}</p>
        </div>
    )
}

export default SignupPage;