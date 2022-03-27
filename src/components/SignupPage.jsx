import React from 'react';
import { useState } from 'react';


const Signuppage = () => {

  const [input, setInput] = useState({ email : '', password : '', country : ''});
  const [emColor, setEmailColor] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pwColor, setPwColor] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  
  function onHandleChange(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    if (name==="email") emailColor();
    if (name==="password") passwordColor();
  }


  const emailColor = () => {
    if (!input.email){
      setEmailColor("blue");
    }
    if (input.email.includes("@")) {
      setEmailColor("green");
      setEmailMessage(`you typed a valid email`);
    }else {
      setEmailColor("red");
      setEmailMessage(`The email should contain : "@"`);
    }
  }


  const passwordColor = () => {
    if (!input.password){
      setPwColor("blue") 
    } else {
      if (input.password.length > 5) {
        setPwColor("green") 
        setPwMessage("Your password is good")
      } else {
        setPwColor("red") 
        setPwMessage("Your password is week")
      }
    }
  }


  function hi() {
    switch (input.country) {
      case "english":
          return "Hello"
      case "de":
          return "Hallo"
      case "fr":
          return "Bonjour"
      default:
          return ""
    }
  }

  return (
    <div>
      <form >
        <p>Email</p>
        <input 
        name="email"
        type="email"  
        className='form-control'
        value={input.email}
        onChange={onHandleChange}
        style={{ border:"2px solid", borderColor:emColor }}
        />
        <p style={{color:emColor}}>{emailMessage}</p>


        <p>Pawssword</p>
        <input 
        name="password"
        type="password"  
        className='form-control'
        value={input.password}
        onChange={onHandleChange }
        style={{ border:"2px solid", borderColor:pwColor }}
        />
        <p style={{color:pwColor}}>{pwMessage}</p>


        <p>Country</p>
        <select 
        className="form-select" 
        name="country"
        onChange={onHandleChange}
        value={input.country.value}
        >
          <option value="en">en</option>
          <option value="de">de</option>
          <option value="fr">fr</option>
        </select>
      </form>
      <p> Your email is: {input.email} </p>
      <p>{hi()}</p> 
    </div>
  );
}

export default Signuppage;