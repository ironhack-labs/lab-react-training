import React, {useState} from 'react'

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [submitData, setSubmitData] = useState(null);

  const handleEmailInput= (e) => {
    setEmail(e.target.value);
  };

  const handleSelect = (e) => {
    e.preventDefault ();

    const newSignUp= { email, password, nationality};
    setSubmitData(newSignUp);
    setEmail("");
    setPassword("");
    setNationality("");
  };


  let greeting;

  if( nationality === "en"){
    greeting= "Hello";
  } else if( nationality === "de"){
    greeting= "Hallo";
  } else if( nationality === "fr" ){
    greeting= "Bonjour";
  }

    return (
        <form onSubmit={(e) => handleSubmit(e)} >
        <label>Email</label><input type='email' name='email' value={email} onChange={(e) => handleEmailInput(e)}></input>
        <label>Password</label><input type='password' name='password' value={password} onChange={(e) => handlePasswordInput(e)}></input>
        <label>Nationality</label>
        <select name='nationality' value={nationality} onChange={(e) => handleSelect(e)}>
          <option value='en'>EN</option>
          <option value='de'>DE</option>
          <option value='fr'>FR</option>
        </select>
  
        <button type='submit'>Sign Up</button>
  
        {submitData && (

    <div>
        <p> {greeting}</p>
        <p> Your email is: {submitData.email}</p>
        <p>Your email addreess is correct </p>
    </div>
  )
}

</form>
  )
}
