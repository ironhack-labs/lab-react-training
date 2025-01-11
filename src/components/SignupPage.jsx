import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isStrongPassword, setIsStrongPassword] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password, nationality });
    setEmail("");
    setPassword("");
    setNationality("");
  };

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(
      String(emailValue)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setIsStrongPassword(passwordValue.length >= 8 && /[A-Z]/.test(passwordValue) && /\d/.test(passwordValue));
  };

  return (
    <Form onSubmit={handleFormSubmission}>
      <FormGroup>
        <Label for="formBasicEmail">Email address</Label>
        <Input
          type="email"
          id="formBasicEmail"
          placeholder="Enter email"
          onChange={handleEmail}
          value={email}
          style={{
            borderColor: email === "" ? "" : isValidEmail ? "green" : "red",
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label for="formBasicPassword">Password</Label>
        <Input
          type="password"
          id="formBasicPassword"
          placeholder="Password"
          onChange={handlePassword}
          value={password}
          style={{
            borderColor: password === "" ? "" : isStrongPassword ? "green" : "red",
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label for="formBasicNationality">Nationality</Label>
        <Input
          type="select"
          id="formBasicNationality"
          onChange={(e) => setNationality(e.target.value)}
          value={nationality}
        >
          <option value="">Select your nationality</option>
          <option value="en">en</option>
          <option value="de">de</option>
          <option value="fr">fr</option>
        </Input>
      </FormGroup>

      <Button color="primary" type="submit">
        Sign up
      </Button>
      <br />
      {nationality === "en" && <p className="mb-3">Hello</p>}
      {nationality === "de" && <p className="mb-3">Hallo</p>}
      {nationality === "fr" && <p className="mb-3">Bonjour</p>}
      <p className="mb-3">Your email address is: {email}</p>
      <p className="mb-3">
        Your email address is {isValidEmail ? "correct" : "incorrect"}
      </p>
      <p className="mb-3">
        Your password is {isStrongPassword ? "strong" : "weak"}
      </p>
    </Form>
  );
}

export default SignupPage;