import { useState } from "react";

export function SignupPage(){

  const [formData, setFormData] = useState({email: "", password: "", nationality: "", message: "Hello"})
  const [passwordError, setPasswordError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [user, setUser] = useState(null);

   const handleSubmit = (event) => {
    event.preventDefault();
    const {name, value} = event.target;

    if(emailError === null || emailError === true){
        setEmailError(true)
        return
    }

    if(passwordError === null || passwordError === true){
        setPasswordError(true)
        return
    }
    setUser(formData);
   }

  const checkEmailInput = (name,value) => {
    if(value.includes('@') === false){
        setEmailError(true)
        return false;
    }else{
        setEmailError(false);
    }
  }

  const checkPasswordInput = (name,value) => {
    if(value.length < 5){
        setPasswordError(true);
        return false;
    }else{
        setPasswordError(false)
    }
  }
   
  const handleChange = (event) => {
    const {name, value} = event.target;
    if(name === 'email'){
        checkEmailInput(name,value)
    }else if(name === 'password'){
        checkPasswordInput(name,value)
    }
    setFormData({...formData, [name]: value})

  }

  return(
    <div>
   <div className="w-50 d-flex flex-column align-items-center gap-1 border-bottom border-muted border-2 text-center">
   <form onSubmit={handleSubmit} style={{width: "400px"}}>
    <label className="fw-bold" htmlFor="email">Email</label>
     <input className="form-control"  type="email" name="email" id="email" onChange={handleChange} style={{border: emailError ? '1px solid red' : null}}/>
     {emailError !== null ? emailError === true ?  <div className="text-danger">You email is invalid</div> : <div className="text-success">You email is valid</div> : null}
     <label className="fw-bold" htmlFor="password" >Password</label>
     <input className="form-control" type="password" name="password" id="password" onChange={handleChange} style={{border: passwordError ? '1px solid red' : null}} />
     {passwordError !== null ? passwordError === true ? <div className="text-danger">Your Password is too Weak</div> : <div className="text-success">Your Password is valid</div> : null }
     <label className="fw-bold " htmlFor="nationality">Nationality</label>
     <select className="form-control" name="message" onChange={handleChange} id="nationality">
        <option value="Hello" name="message" >En</option>
        <option value="Hallo" name="message">De</option>
        <option value="Bonjour" name="message">Fr</option>
     </select>
     <button type="submit" className="btn btn-primary my-3 fs-5">Sign up</button>
     </form>
   </div>
   <div className="text-center w-50">
      {user ? <div><p>{user.message}</p><p>{user.email}</p><p>Your email address is correct</p></div> : null}
   </div>
   </div>
  );
}