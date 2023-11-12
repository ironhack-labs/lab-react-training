import { useState } from "react";

function SignupPage(props) {
    const [nationality, setNationality] = useState("")
    const [email, setEmail] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isStrongPassword, setIsStrongPassword] = useState(false);

    function nationalGreeting() {
        switch (nationality) {
            case "en":
                return <span>Hello</span>;
                break;
            case "de":
                return <span>Hallo</span>;
                break;
            case "fr":
                return <span>Bonjour</span>;
                break
            default:
                return <span> Hi</span >;
        }
    }

    function nationalityChange(event) {
        setNationality(event.target.value)
    }

    function emailChange(event) {
        let tempEmail = event.target.value
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = tempEmail.match(emailRegex);
        setIsEmailValid(isValid);
        if (isValid) setEmail(event.target.value);
    }

    function passwordChange(event) {
        let tempPassword = event.target.value;
        if (tempPassword.length > 8) setIsStrongPassword(true);
        else setIsStrongPassword(false);
    }

    return (
        <div>

            <form action="">
                <label htmlFor="email-input">Email</label>
                <input id="email-input" type="email" onChange={emailChange} />

                <label htmlFor="password-input">Password</label>
                <input id="password-input" type="password" onChange={passwordChange} />

                <label htmlFor="nationality-input">Nationality</label>
                <select name="nationality" id="nationality-input" onChange={nationalityChange}>
                    <option value="">--Please select a nationality</option>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>
            </form>
            <p>{nationalGreeting()}</p>
            <p>{isEmailValid ? "Your email address is: " + email : "Please input a correct email"}</p>
            <p>{isStrongPassword ? "Your password is strong" : "Your password is weak"}</p>


        </div>
    )
}

export default SignupPage;