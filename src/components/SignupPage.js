import React, {useState} from 'react'

const SignupPage = () => {

    let [emailText, setEmailText] = useState("");
    let [nationalityText, setNationalityText] = useState("en");

    const clickEmail = () => {
        let emailValue = document.querySelector("#email").value;
        let nationality= document.querySelector("#nationality").value;

        setEmailText(emailValue);

        switch(nationality)
        {
            case "en":
            default :
                setNationalityText("Hello");
            break;

            case "de":
                setNationalityText("Hallo");
            break;
        
            case "fr":
                setNationalityText("Bonjour");
            break;
        }
    }


    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/><br/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/><br/>
            <label htmlFor="password">Nationality</label>
            <select name="nationality" id="nationality">
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
            </select>
            <br/>
            <button onClick={() => {clickEmail()}}>Sign up</button>

            <hr/>

            {emailText.length > 0 &&             
            <div>
                <h3>{nationalityText}</h3>
                <span>Your Email Address is: <strong>{emailText}</strong></span>
            </div>
            
            }

        </div>
    )
}

export default SignupPage
