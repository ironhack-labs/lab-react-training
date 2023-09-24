import React from "react";
import { useState } from "react";
import { Button, Input, FormText, Form, FormGroup, Label } from "reactstrap";

function SingupPage(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    lang: "English",
  });

  const [greeting, setGreeting] = useState([]);

  function handleChange(e) {
    const currentValue = e.target.value;
    setState({ ...state, [e.target.name]: currentValue });
    // "name" means... it matches the "name attribute" of the input field.
  }

  function handleSubmit(e) {
    console.log("eee", e);

    e.preventDefault();

    let language = e.target.lang.value;
    let emailAddress = e.target.email.value;
    let greetingLanguage = "";
    let emailGreeting = `Your email address is: ${emailAddress} `;
    let emailCorrectGreeting = "Your email is correct";

    language === 'EN'
    ? (greetingLanguage = 'Hello')
    : language === 'DE'
    ? (greetingLanguage = 'Hallo')
    : (greetingLanguage = 'Bonjour');
  setGreeting([greetingLanguage, emailGreeting, emailCorrectGreeting]);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="your email"
            type="email"
            value={state.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Email</Label>
          <Input
            id="password"
            name="password"
            placeholder="your password"
            type="password"
            value={state.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <select
            id="nationality"
            name="lang"
            type="select"
            value={state.lang}
            onChange={handleChange}
          >
            <option>EN</option>
            <option>FR</option>
            <option>DE</option>
          </select>
          <Button>Submit</Button>
          
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input id="exampleFile" name="file" type="file" />
          <FormText>Upload your file</FormText>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Choose One</legend>

          <FormGroup check>
            <Input name="radio2" type="radio" />{" "}
            <Label check>
              Option one is this and that—be sure to include why it‘s great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio2" type="radio" />{" "}
            <Label check>
              Option two can be something else and selecting it will deselect
              option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input disabled name="radio2" type="radio" />{" "}
            <Label check>Option three is disabled</Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" /> <Label check>Check me out</Label>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
      {greeting ? greeting.map((e, i)=> {

return (<div key={i+e}><p>{e}</p></div>)
}):null}
    </div>
  );
}

export default SingupPage;
