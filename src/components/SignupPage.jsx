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
            <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
            <input type="password"  value={password} onChange={(event)=>setPassword(event.target.value)}   />
            <select  value={nationality} onChange={(event)=>setNationality(event.target.value)} >
                <option value="en">en</option>
                <option value="de">de</option>
                <option value="fr">fr</option>
            </select>
            <button type="submit">Submit form</button>
        </form>
        
        <p>{(newItem.nationality==="fr") ? "Bonjour" : (newItem.nationality==="de" ? "Hallo" : "Hello")}!</p>
        <p>Your email is {newItem.email}</p>

    </>
  )
}

export default SignupPage
