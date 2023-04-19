import { useState } from 'react';
import { FormGroup } from 'reactstrap';

function SignupPage(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }

    const handleNationalityInput = (event) => {
        setNationality(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { email, password, nationality };
        console.log("newUser", newUser);
        setEmail('')
        setPassword('')
        setNationality('')
    }
    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input valid type="email" name="email" id="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={email} onChange={handleEmailInput}/>

                <label>Password</label>
                <input type="password" name="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" value={password} onChange={handlePasswordInput}/>

                <label>Nationality</label>
                <select type="nationality" name="nationality" onChange={handleNationalityInput}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>

                <button type="submit">Sign Up</button>
            </form>
            <hr></hr>
            <div>
                {nationality === "en" && <p>Hello</p>}
                {nationality === "de" && <p>Hallo</p>}
                {nationality === "fr" && <p>Bonjour</p>}
            </div>
            <div>
                <p>Your email address is: {email}</p>
            </div>
        </div>
    )
}
export default SignupPage;