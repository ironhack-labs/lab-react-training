import { useState } from 'react';




function SignupPage() {

    const [userArray, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');

    const displayMessage = (nationality) => {
        if (userArray.nationality === 'de') return 'Hallo'
        if (userArray.nationality === 'en') return 'Hello'
        if (userArray.nationality === 'fr') return 'Bonjour'
    }

    const addNewUser = (newUser) => {
        const updatedUsers = [...userArray, newUser]
        setUsers(updatedUsers)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { email, password, nationality };
        addNewUser(newUser)
        setEmail("");
        setPassword("");
        setNationality("");
    }

    return (
        <div>

            <form onSubmit={handleSubmit} >
                <label > Email: </label>
                <input value={email} type="email" placeholder="user@email.com" onChange={(e) => setEmail(e.target.value)} />
                <label > Password: </label>
                <input value={password} type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)} />
                <label > Nationality: </label>
                <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                    <option value="en">England</option>
                    <option value="de">German</option>
                    <option value="fr">France</option>
                </select>
                <button type="submit" htmlType='submit'>Sign Up</button>
            </form>

            <p>{displayMessage({ nationality })}</p>
            <p>Your email is {email}</p>

        </div>
    )
}

export default SignupPage;