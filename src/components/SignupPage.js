import { useState } from "react";
import Greeting from "./Greeting";

 
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [user,setUser] = useState()

  console.log("the props on the sign up", user)
  

  const handleEmailInput = e => setEmail(e.target.value);
  const handlePasswordInput = e => setPassword(e.target.value);
  const handleNationalityInput = e => setNationality(e.target.value);
 
  const handleSubmit = (e) => {        
    e.preventDefault();
    const userCreated = { email, password, nationality };
    
    console.log("Submitted: ", userCreated);
    setUser(userCreated)

    // Reset the state
   
    /*setEmail("");
    setPassword("");
    setNationality("");
   */
  }

  const addNewUser = (user) => {
  const userArr = [user];
  };

  return (
    <div className="SignupPage">
      <h4>Sign up</h4>
      <form onSubmit={handleSubmit} > 
        <label>Email: </label>
        <input 
            type="text" 
            name="email" 
            value={email} 
            onChange={handleEmailInput}
        />
        
  
        <label>Password: </label>
        <input 
            type="text" 
            name="password" 
            value={password}
            onChange={handlePasswordInput} 
        />
  
        <label>Nationality: </label>

        <select value={nationality}
                onChange={handleNationalityInput} >
             <option></option>
             <option value= "en">England</option>
          <option>fr</option>
          <option>de</option>
        </select>
        
        <button type="submit">Sign up</button>
      </form>
      <div>
       <Greeting user={user}/>
        {/*{user.nationality === "en" && <p>Hello</p>}
        {user.nationality === "fr" && <p>Bounjour</p>}
        {user.nationality === "de" && <p>Hallo!</p>}*/}
        
      </div>
    </div>
  );
}
 
export default SignupPage;