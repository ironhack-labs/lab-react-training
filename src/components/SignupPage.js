import React, {useState} from 'react';
import '../index.css';
function SignupPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [nationality, setNationality] = useState("en");

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   }

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   }

   const handleNationalityChange = (event) => {
      setNationality(event.target.value);
   }
   
   const greetings = {
      en: "Hello",
      de: "Hallo",
      fr: "Bonjour",
   }

    return(
       <div>
         <form>
         <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
         </label>
         <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
         </label>
         <label>
            Nationality:
            <select value={nationality} onChange={handleNationalityChange}>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
            </select>
            </label>
            <button type="submit">Sign up</button>
            </form>
            <p>{greetings[nationality]}</p>
            <p>Your email address is:{email} </p>
            <p>Your email address is correct</p>
       </div>
    );
 

}

export default SignupPage;
