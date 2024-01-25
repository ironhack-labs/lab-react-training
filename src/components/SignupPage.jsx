import { useState } from 'react';

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
        setPasswordIsValid(inputPassword.length >= 8);
    };

    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    };

    const greetingText = () => {
        switch (nationality) {
            case 'en':
                return 'Hello';
            case 'de':
                return 'Hallo';
            case 'fr':
                return 'Bonjour';
            default:
                return 'Hola';
        }
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
            {!emailIsValid && <p style={{ color: 'red' }}>Formato de correo electrónico inválido</p>}

            <label>Contraseña</label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                style={{ borderColor: passwordIsValid ? 'green' : 'red' }}
            />
            {!passwordIsValid && <p style={{ color: 'red' }}>Contraseña débil</p>}

            <label>Nacionalidad</label>
            <select value={nationality} onChange={handleNationalityChange}>
                <option value="en">Inglés</option>
                <option value="de">Alemán</option>
                <option value="fr">Francés</option>
            </select>

            <p>{greetingText()}, {email}</p>
            <button>Registrarse</button>
        </div>
    );
};

export default SignupPage;
