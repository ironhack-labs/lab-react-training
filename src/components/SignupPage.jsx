import { useState } from "react"


function SignupPage() {
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [nationality, setNationality ] = useState("");
    const [newItem, setNewItem] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEntry = {
            email: email,
            password: password, 
            nationality: nationality
        };
        setNewItem(newEntry);
        // setEmail("");
        // setPassword("");
        // setNationality("");
        // setNewItem("");
    }

  return (
    <>
        
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} />

            <label>Password: </label>
            <input type="password"  value={password} onChange={(event)=>setPassword(event.target.value)}   />

            <label>Nationality: </label>
            <select  value={nationality} onChange={(event)=>setNationality(event.target.value)} >
                <option value="en">English </option>
                <option value="de">German </option>
                <option value="fr">French </option>
            </select>
            <button type="submit">Sign up</button>
        </form>
        
        <p>{(newItem.nationality==="fr") ? "Bonjour" : (newItem.nationality==="de" ? "Hallo" : "Hello")}!</p>
        <p>Your email is: {newItem.email}</p>
        <p>Your email is correct</p>

    </>
  )
}

export default SignupPage
