import { useState } from "react";
import "./SignUpPage.css";
import Dice from "../Dice/Dice";
function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [showDiv, setShowDiv] = useState(false);

  const manageSubmit = (e) => {
    e.preventDefault();
    console.log("entered on manage submit");
    setShowDiv(true);
    setTimeout(() => {
      setEmail("");
      setPassword("");
      setNationality("select")
      setShowDiv(false);
    }, 4000);
  };

  return (
    <div className="sign-up-form">
      <form onSubmit={manageSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="select" className="form-label">
            Nationality
          </label>
          <select
            id="select"
            className="form-select"
            onChange={(e) => {
              setNationality(e.target.value);
            }}
            value={nationality}
          >
            <option value={"select"}>Select your nationality</option>
            <option value={"german"}>German</option>
            <option value={"english"}>English</option>
            <option value={"french"}>French</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {showDiv && (
        <div>
          {nationality === "german" && <p>Hallo</p>}
          {nationality === "english" && <p>Hello</p>}
          {nationality === "french" && <p>Bounjour</p>}

          <p>Your email is: {email}</p>
          <p>Your email adress is correct</p>
        </div>
      )}
    </div>
  );
}

export default SignUpPage;
