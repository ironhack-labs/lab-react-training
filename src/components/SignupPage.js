import React, { useState } from 'react'

function SignupPage() {
    const [ validEmail, setValidEmail ] = useState(false); 
    const [ strongPassword, setStrongPassword ] = useState(false); 
    const [ nationality, setNationality ] = useState('Unknown');
    
    let languages = {
        en: "English", 
        de: "German",
        fr: "French"
    }

    const handleEmailChange = (event) => {
        console.log(event.target.value)
        if (event.target.value.length > 5) {
            setValidEmail(true);
        }
        else {
            setValidEmail(false);
        }
    }

    const handlePasswordChange = (event) => {
        console.log(event.target.value)
        if (event.target.value.length > 10) {
            setStrongPassword(true);
        }
        else {
            setStrongPassword(false);
        }
    }

    const handleNationalityChange = (event) => {
        setNationality(languages[event.target.value])
    }

    return (
        <div>
            <input onChange={handleEmailChange} style={{backgroundColor: `${validEmail ? 'green' : 'red'}`}} type="email" name="email"></input>
            {validEmail && <p>Your email is valid.</p>}
            <input onChange={handlePasswordChange} style={{backgroundColor: `${strongPassword ? 'green' : 'red'}`}} type="password" name="password"></input>
            {!strongPassword && <p>Your password is too weak.</p>}
            <select onChange={handleNationalityChange}>
                <option value="fr">French</option>
                <option value="en">English</option>
                <option selected value="de">German</option>
            </select>
            {/* <input type="password"></input> */}
            {/* <select></select> */}
            <p>Hi, are you {nationality}?</p>
            <p></p>
        </div>
    )
}

export default SignupPage
