import { useState } from 'react';

function SignupPage () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState();

    

    const handleEmailInput = (event) => setEmail(event.target.value);
    const handlePasswordInput = (event) => setPassword(event.target.value);
    const handleNationalityInput = (event) => setNationality(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        return(
            <div>
                <p>Hi, </p>
                <p>Your email address is: {email}</p>
            </div>
        );
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='text' name='email' value={email} onChange={handleEmailInput} style={{width: 600, height: 30}}></input>

                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handlePasswordInput} style={{width: 600, height: 30}}></input>

                <label>Nationality</label>
                <input type='select' name='nationality' value={nationality} onChange={handleNationalityInput} style={{width: 600, height: 30}}></input>

                <button type='submit' style={{width: 100, height: 30}}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;