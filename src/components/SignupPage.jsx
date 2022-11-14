import { useState } from 'react';

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

      console.log(input);
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
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
      >
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={input.email}
          type="email"
          name="email"
          id="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={input.password}
          type="password"
          name="password"
          id="password"
          required
        />

        <label htmlFor="nationality">Nationality</label>
        <select
          value={input.nationality}
          onChange={handleChange}
          name="nationality"
          required
        >
          <option label=" "></option>
          <option value="en">England</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
      {showSuccess && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Your email is {input.email}</p>
          <button onClick={handleGotIt}>OK!</button>
        </div>
      )}
    </>
  );
}
export default SignupPage;
