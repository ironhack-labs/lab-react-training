import { useState } from "react";

export default function SignupPage() {
    
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [nationality, updateNationality] = useState("en");

    return (
    <div className="sign-up">
        <form>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={email} onChange={e => updateEmail(e.target.value)} />

            <label htmlFor="password">password</label>
            <input id="password" name="password" type="password" value={password} onChange={e => updatePassword(e.target.value)}  />

            <label htmlFor="nationality">Nationality</label>
            <select name="nationality" id="nationality" onChange={e => updateNationality(e.target.value)}>
                <option value="en" selected={nationality === "en" }>English</option>
                <option value="de" selected={nationality === "de" }>German</option>
                <option value="fr" selected={nationality === "fr" }>French</option>
            </select>

            <button type="submit">Sign up</button>

        <p>
            {nationality === "en" && "Hello"}
            {nationality === "de" && "Hallo"}
            {nationality === "fr" && "Bonjour"}
            <br />
            Your email is {email}
        </p>

        </form>
    </div>);
}