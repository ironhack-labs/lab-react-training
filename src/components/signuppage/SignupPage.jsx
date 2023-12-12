import React, { useState } from 'react';
import Greetings from '../greetings/Greetings';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailIsValid(emailRegex.test(inputEmail));
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePasswordStrength(newPassword);
    };

    const validatePasswordStrength = (inputPassword) => {

    };

    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    };
    const handleSignup = () => {
        // Add your signup logic here
        console.log('Signup button clicked!');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Nationality:', nationality);
    };
    return (
        <div>
            <label>Email</label>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={{ borderColor: emailIsValid ? 'green' : 'red' }}
            />
            {!emailIsValid && <p style={{ color: 'red' }}>Invalid email format</p>}

            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                style={{ borderColor: passwordIsValid ? 'green' : 'red' }}
            />
            {!passwordIsValid && <p style={{ color: 'red' }}>Weak password</p>}

            <label>Nationality</label>
            <select value={nationality} onChange={handleNationalityChange}>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
                <option value="tr">Turkish</option>
                <option value="rs">Russian</option>
            </select>

            <Greetings lang={nationality} />

            <p>Your email is {email}</p>
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default SignupPage;

