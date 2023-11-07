import React, { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  const isEmailValid = /\S+@\S+\.\S+/;
  const isPasswordStrong = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  return (
    <div className="signup-page">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={isEmailValid.test(email) ? "valid" : "invalid"}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={isPasswordStrong.test(password) ? "strong" : "weak"}
        />
      </label>

      <label>
        Nationality:
        <select value={nationality} onChange={handleNationalityChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </label>

      <p>
        {nationality === "en" && "Hello"}
        {nationality === "de" && "Hallo"}
        {nationality === "fr" && "Bonjour"}
      </p>

      <p>Your email is {email}</p>
    </div>
  );
};

export default SignupPage;
