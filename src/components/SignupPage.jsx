import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  const isEmailValid = () => {
        return email.includes("@");
    };

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleNationalityInput = (e) => setNationality(e.target.value);

  const helloByNationality = () => {
    switch (nationality) {
      case "en":
        return <p>Hello</p>;
        break;
      case "de":
        return <p>Hallo</p>;
        break;
      case "fr":
        return <p>Bonjour</p>;
        break;
      default:
        return <p>Hello</p>;
        break;
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailInput}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordInput}
        />

        <label htmlFor="nationality">Nationality</label>
        <select
          name="nationality"
          id="nationality"
          value={nationality}
          onChange={handleNationalityInput}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>

      {helloByNationality()}
      <p>Your email is {email}</p>
      {isEmailValid() && <p>Your email address is correct</p>}
    </div>
  );
}

export default SignupPage;
