import '../App.css'
import { useState } from "react";

function SignUp() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [nationality, setNationality] = useState('English');

const handleEmailInput = (e) => setEmail(e.target.value);
const handlePasswordInput = (e) => setPassword(e.target.value);
const handleNationalitySelection = (e) => setNationality(e.target.value);

function greeting(nationality){
    if (nationality === 'English'){
        return <p>Hello</p>
    } else if (nationality === 'German'){
        return <p>Hallo</p>
    } else { 
        return <p>Bonjour</p>
    }
}

function yourEmailIs(nationality){
    if (nationality === 'English'){
        return <p>Your email is</p>
    } else if (nationality === 'German'){
        return <p>Ihre E-Mail ist</p>
    } else { 
        return <p>Votre e-mail est</p>
    }
}

    return (
        <div id='SignUp'>

              <form /* onSubmit={handleSubmit} */>

                <label>Email:</label>
                <input type="email" value={email}  onChange={handleEmailInput}  />
        
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordInput}  />
        
                <label>Nationality:</label>
                <select name="Nationality" value={nationality} id="nationality" onChange={handleNationalitySelection} >
                <option value="English">English</option>
                <option value="German">German</option>
                <option value="French">French</option>
                </select>

              </form>

            <p id='greeting'>{greeting(nationality)}</p>
              <p id='emailInfo'>{yourEmailIs(nationality)}...<span id='email'>{email}</span></p>

         </div>
    )
}

export default SignUp;