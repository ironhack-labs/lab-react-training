//jshint esversion:9

import { useState } from "react";
import { useEffect } from "react";

export const SignupPage = (props) => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[nationality, setNationality] = useState("");

    const [newUser, setNewUser] = useState({});
    const [hasUser, setHasUser] = useState(false);
    const [sayHello, setSayHello] = useState("");
    const [message, setMessage] = useState("");

    useEffect ((hasUser)=>{

        if (newUser.nationality === "en" || newUser.nationality === "") {
            newUser.nationality = "en";
            setSayHello("Hello");
        } 
        if (newUser.nationality === "de") {
            setSayHello("Hallo");
        } 
        if (newUser.nationality === "fr") {
            setSayHello("Bonjour");
        } 

        if(hasUser){
           setMessage(`Your email is ${newUser.email}`); 
        }
        

        setHasUser(true);
        setEmail("");
        setPassword("");
        setNationality("");
        
    },[newUser]);


    const handleSubmit = e => {

        e.preventDefault();

        /* if(!email.includes("@")){
            document.querySelector(".email-input").style.outline = "red";
        } */
        
        let user = { email: email, password: password, nationality: nationality };

        console.log('user to create =>', user);

        

        setNewUser(user);
    };
    

    return (
        <div className="SignupPage">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <label><b>Email: </b>
                    <input type="email" className="email-input" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </label> <br/>
                <label><b>Password: </b>
                    <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>  <br/>
                <label><b>Nationality: </b>
                    <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                </label>  <br/>
                <button type="submit">Sign up</button>
            </form>
            
                {hasUser &&<>
                    <p>{sayHello}</p> 
                    <p>{message}</p>
                </>}     
        </div>
    );
};