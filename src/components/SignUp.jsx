import React from 'react';
import { useState } from 'react';

function SignUp() {
    const options = ["de", "en", "fr"]
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [nationality, setNationality] = useState("")

    const handleEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
        event.preventDefault();
        if(email){
           alert(`your email is ${email}`)
        }
        
      };
      const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
        if(password){
            alert("valid password")
        }
    };
        const handleNationality = (event) => {
            event.preventDefault();
            setNationality(event.target.value);
            if(nationality === "En"){
                alert("Hello!")

            }
            if(nationality === "De"){
                alert("Hallo!")
            }
            if(nationality === "Fr"){
                alert("Bonjour!")
            }
         
        
      };
     
  return (
    <div>
    <form onSubmit={handleEmail}>
    <label>
    {' '}
    Email
    <input type="email" value={email}  onChange={(event) => setEmail(event.target.value)} />
     
  </label>
  <button>
    Submit
</button>
  </form>

  <form onSubmit={handlePassword}>
<label>
    {' '}
    Password 
    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
</label>
<button>
    Submit
</button>
  </form>
 
  <form onSubmit={handleNationality}>
<label for="nationality">
    {' '}
   Nationality
   <select onChange={(event) => setNationality(event.currentTarget.value)}>
   
   <option value="En">En</option> 
    <option value="Fr">Fr</option>
    <option value="De">De</option>
    
   


  
    </select>
    <input type="submit"   />
    </label>


  </form>

  
  </div>
 
  
 


  )
}
export default SignUp;

