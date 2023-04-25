import { useState } from 'react';
function SignupPage(){

    const [user, setUser] = useState({
        email: '',
        password: '',
        nationality: ''
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = user
        console.log("newUser", newUser);
        setUser({
            email: '',
            password: '',
            nationality: ''
        })

    }
    
    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input valid type="email" name="email" id="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={user.email} onChange={handleInput}/>

                <label>Password</label>
                <input type="password" name="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" value={user.password} onChange={handleInput}/>

                <label>Nationality</label>
                <select type="nationality" name="nationality" onChange={handleInput}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>

                <button type="submit">Sign Up</button>
            </form>
            <hr></hr>
            <div>
                {user.nationality === "en" && <p>Hello</p>}
                {user.nationality === "de" && <p>Hallo</p>}
                {user.nationality === "fr" && <p>Bonjour</p>}
            </div>
            <div>
                <p>Your email address is: {user.email}</p>
            </div>
        </div>
    )
}
export default SignupPage;