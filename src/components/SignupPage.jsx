import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Styles';

const defaultState = {
  email: '',
  password: '',
  nationality: '',
};

function SignupPage() {
  const [input, setInput] = useState(defaultState);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    setInput((old) => {
      let newValue = event.target.value;
      return { ...old, [event.target.name]: newValue };
    });
  };

  const handleGotIt = () => {
    setShowSuccess(false);
    setInput(defaultState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
    console.log(`Your email is ${input.email}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} style={{}}>
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={handleChange}
          value={input.email}
          type="email"
          name="email"
          id="email"
          required
        />

        <Label htmlFor="password">Password</Label>
        <Input
          onChange={handleChange}
          value={input.password}
          type="password"
          name="password"
          id="password"
          required
        />

        <Label htmlFor="nationality">Nationality</Label>
        <Select
          value={input.nationality}
          onChange={handleChange}
          name="nationality"
          required
        >
          <option label=" "></option>
          <option value="en">England</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
        </Select>
        <Button type="submit">Sign Up</Button>
      </Form>
      {showSuccess && (
        <SuccesDiv>
          <p>Your email is {input.email}</p>
          <Button onClick={handleGotIt}>OK!</Button>
        </SuccesDiv>
      )}
    </>
  );
}
export default SignupPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Label = styled.label`
  padding: 2px 5px;
  color: #555;
`;

const Select = styled.select`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #555;
  &:focus {
    outline: 1px solid darkblue;
    background-color: lightblue;
  }
`;

const Button = styled.button`
  width: fit-content;
  margin: auto;
  padding: 10px;
  background-color: transparent;
  color: darkblue;
  border-radius: 5px;
  border: 1px solid lightblue;
  transition: 0.5s;
  &:hover {
    border: 1px solid white;
    background-color: lightblue;
  }
  &:active {
    border: 1px solid darkblue;
  }
`;

const SuccesDiv = styled.div`
  min-width: 200px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid lightblue;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;
