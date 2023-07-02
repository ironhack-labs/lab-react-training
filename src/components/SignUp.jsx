import { useState } from "react";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [nacionality, setNacionality] = useState("en");

  const signUp = (user) => {
    user._id = user.email + Math.random() * 100000;
    setUsers((state) => [user, ...state]);
    console.log("users", users);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNacionality(event.target.value);
  };

  const handleSubmit = (event) => {
    signUp({ email, password });
  };

  let greeting;
  if (nacionality === "en") {
    greeting = <p>Hello</p>;
  } else if (nacionality === "fr") {
    greeting = <p>Bonjour</p>;
  } else if (nacionality === "de") {
    greeting = <p>Hallo</p>;
  }

  return (
    <div className="signup-page">
      <h2>Sign up</h2>
      <input
        type="email"
        onChange={handleEmailChange}
        placeholder="e-mail"
        className="signup-form"
      />
      <input
        type="password"
        onChange={handlePasswordChange}
        placeholder="Password"
        className="signup-form"
      />
      <select onChange={handleNationalityChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>

      <button type="button" onClick={handleSubmit}>
        Sign up!
      </button>

      <br />

      {email && <p>Your email is {email}</p>}
      {nacionality && greeting}
    </div>
  );
}

export default SignUp;
