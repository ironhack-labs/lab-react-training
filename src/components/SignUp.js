import React, {useState} from "react";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('en');
    const [submit, setSubmit] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handllenationality = (event) => {
        setNationality(event.target.value);
    };

    const handleSubmit = () => {
        setSubmit(true);
    };

    const greeting = () => {
        if (nationality === "en") {
          return "Hello";
        } else if (nationality === "de") {
          return "Hallo";
        } else if (nationality === "fr") {
          return "Bonjour";
        }
      };

    return (
        <div>

            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmail}/>
            </div>
            
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePassword}/>
            </div>
            
            <div>
                <label>nationality:</label>
                <select value={nationality} onChange={handllenationality}>
                    <option value='en'>English</option>
                    <option value='de'>German</option>
                    <option value='fr'>French</option>
                </select>
            </div>

            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {submit && (
                <div>
                    <p>{greeting()}</p>
                    <p>Your email is {email}</p>
                </div>
            )}
        </div>
    );
};

export default SignUp;