import { useState } from 'react';
import FormControl from './FormControl';
import SelectControl from './SelectControl';

const nacionalities = [
  { value: 'none', label: 'Select your nationality' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
  { value: 'fr', label: 'French' },
];

function SignupPage() {
  const [dados, setDados] = useState({
    email: '',
    password: '',
    nationality: 'none',
  });

  function handleChange(event) {
    setDados({ ...dados, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function changePasswordColors() {
    let inputStyle;
    if (dados.password.length <= 5) {
      inputStyle = { border: '1px solid red' };
    } else {
      inputStyle = { border: '1px solid green' };
    }
    return inputStyle;
  }

  function changeEmailColors() {
    let inputStyle;
    if (dados.email.includes('@')) {
      inputStyle = { border: '1px solid green' };
    } else {
      inputStyle = { border: '1px solid red' };
    }
    return inputStyle;
  }

  function greeting() {
    let greetingStr;
    if (dados.nationality === 'en') {
      greetingStr = 'Hello';
    } else if (dados.nationality === 'de') {
      greetingStr = 'Hallo';
    } else if (dados.nationality === 'fr') {
      greetingStr = 'Bonjour';
    } else {
      greetingStr = '';
    }

    return greetingStr;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl
          label="Email"
          id="singUpEmail"
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
          style={changeEmailColors()}
        />

        <FormControl
          className="password"
          label="Password"
          id="createpassword"
          type="password"
          name="password"
          onChange={handleChange}
          value={dados.password}
          style={changePasswordColors()}
        />

        <SelectControl
          label="Select your nationality"
          id="selectNationality"
          name="nationality"
          onChange={handleChange}
          value={dados.nationality.value}
        >
          {nacionalities.map((currentOptionObj) => (
            <option key={currentOptionObj.value} value={currentOptionObj.value}>
              {currentOptionObj.label}
            </option>
          ))}
        </SelectControl>

        <button className="btn btn-primary" type="submit">
          Sign-up!
        </button>

        <div>
          <p>{greeting()}</p>
          <p> Your email is: {dados.email} </p>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
