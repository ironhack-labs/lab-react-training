import React from 'react'
import './SignupPage.css'

const SignupPage = ({handleChange, handleSubmit, isValidEmail, greetings}) => {

    const validationColor = isValidEmail.status ? 'green' : isValidEmail.status !== undefined ? 'red' : ''
    console.log(isValidEmail)

//=-=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function handlePassword(){
document.getElementById("message").style.display = "block";
let myInput = document.getElementById("exampleInputPassword1");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");

  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");

  }
  
  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");

  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");

  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  
}
//=-=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    return (
        <div>
            <div className='container'>
                <h2>Iteration 15: Form | SignupPage</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{color: validationColor}}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={handleChange} style={{borderColor: validationColor, color: validationColor}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <i id="emailHelp" className="form-text text-muted" style={{color: validationColor}}>{isValidEmail.msg}</i>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        <i className="form-text text-muted" style={{color: validationColor}}>{isValidEmail.msg}</i>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputNationality1">Nationality</label>
                        <select className="form-control" id="exampleInputNationality1">
                            <option value='en'>English</option>
                            <option value='es'>Spanish</option>
                            <option value='fr'>France</option>
                            <option value='ge'>German</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
                <h2>{greetings}</h2>
                <div id="message">
                    <h3>Password must contain the following:</h3>
                    <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                    <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                    <p id="number" className="invalid">A <b>number</b></p>
                    <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
