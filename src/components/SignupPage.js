import { useState } from "react";

function SignupPage () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nationality, setNationality] = useState();


    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleNationality = (e) => setNationality(e.target.value)
    const handleSubmit = e => {
        e.preventDefault();
        const newUser = {email, password, nationality}
    }

    return (
        <div>
            <h3>Iteration 15</h3>
            <form>

                <label>Email</label>
                <input type='text' name='email' value={email} onChange={handleEmail}/>

                <label>Password</label>
                <input type='text' name='password' value={password} onChange={handlePassword} />

                <label>Nationality</label>
                <select value = {nationality} onChange={handleNationality} >
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}
export default SignupPage