import React, { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
 

  const handleEmailChange = (e) => 
    setEmail(e.target.value);
   
  
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNationalityChange = (e) => setNationality(e.target.value);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    return (
      password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password)
    );
  };

  const greeting = (nationality) => {
    switch (nationality) {
      case "en":
        return "Hello";
      case "de":
        return "Hallo";
      case "fr":
        return "Bonjour";
      default:
        return "";
    }
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          value={email}
          style={
            isValidEmail(email)
              ? { border: "2px solid green" }
              : { border: "1px solid red" }
          }
          onChange={handleEmailChange}
        />
        {/* {(isValidEmail(email)) ? (
          <div>
            <p style={{ color: "green" }}>You typed a valied email</p>
          </div>
        ) : (
          <div>
            <p style={{ color: "red" }}>You typed an invalied email</p>
          </div>
        )} */}

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <label>Nationality</label>
        <select
          name="selectedNationality"
          value={nationality}
          onChange={handleNationalityChange}
        >
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </form>

      <p>{greeting(nationality)}</p>
      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
