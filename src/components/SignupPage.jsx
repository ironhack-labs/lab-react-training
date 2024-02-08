import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailRegex.test(inputEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePasswordStrength(newPassword);
  };

  const validatePasswordStrength = (inputPassword) => {
    setValidPassword(inputPassword.length >= 8);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const greetingText = () => {
    switch (nationality) {
      case "en":
        return "Hello";
      case "de":
        return "Hallo";
      case "fr":
        return "Bonjour";
      default:
        return "Hola";
    }
  };

  return (
    <div>
      <label>E-mail address</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: validEmail ? "green" : "red" }}
      />
      {!validEmail && <p style={{ color: "red" }}>Invalid e-mail format</p>}

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: validPassword ? "green" : "red" }}
      />
      {!validPassword && <p style={{ color: "red" }}>Insecure password</p>}

      <label>Nationality</label>
      <select value={nationality} onChange={handleNationalityChange}>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
      </select>

      <p>
        {greetingText()}, {email}
      </p>
      <button>Sign up</button>
    </div>
  );
};

export default SignupPage;
