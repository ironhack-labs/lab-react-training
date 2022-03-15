import { useState } from 'react';
let greetingLanguage = ``;

const nat = [
  { value: 1, label: 'English' },
  { value: 2, label: 'German' },
  { value: 3, label: 'French' },
];

function SignupPage() {
  const [state, setState] = useState({
    email: '',
    password: '',
    nationality: '',
    greeting: '',
    textEmail: '',
    validateEmail: 'form-control w-50',
    validatePassword: 'form-control w-50',
  });

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (String(email).toLowerCase().match(re)) {
      return 'form-control w-50 border border-success';
      //   return true;
    } else {
      return 'form-control w-50 border border-danger';
      //   return false;
    }
  }

  function checkPassword(passcode) {
    const passw = /^[A-Za-z]\w{7,14}$/;
    if (passcode.match(passw)) {
      //   return true;
      return 'form-control w-50 border border-success';
    } else {
      return 'form-control w-50 border border-danger';
      //   return false;
    }
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log(validateEmail(state.email));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (state.nationality === `1`) {
      greetingLanguage = `Hello`;
    } else if (state.nationality === `2`) {
      greetingLanguage = 'Hallo';
    } else {
      greetingLanguage = `Bonjour`;
    }
    setState({
      ...state,
      greeting: greetingLanguage,
      textEmail: `Your email is ${state.email}`,
      validateEmail: validateEmail(state.email),
      validatePassword: checkPassword(state.password),
    });

    console.log(greetingLanguage);
    console.log(state);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group m-3">
          <label htmlFor="userEmailRegister" className="form-label">
            E-mail
          </label>
          <input
            onChange={handleChange}
            className={state.validateEmail}
            id="userEmailRegister"
            type="email"
            name="email"
            value={state.email}
          />
          {/* <div class="color: $green">
            <p>
              {state.validateEmail
                ? 'You typed a valid email'
                : 'This is not a valid email'}
            </p>
          </div> */}
        </div>
        <div className="form-group m-3">
          <label htmlFor="userPasswordRegister" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            className={state.validatePassword}
            id="userPasswordRegister"
            type="password"
            name="password"
            value={state.password}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="userNatRegister" className="form-label">
            Nationality
          </label>
          <select
            onChange={handleChange}
            className="form-select w-50"
            id="userNatRegister"
            name="nationality"
            value={state.nationality}
          >
            <option value="default">Selecione abaixo...</option>
            {nat.map((currentCountry) => {
              return (
                <option key={currentCountry.value} value={currentCountry.value}>
                  {currentCountry.label}
                </option>
              );
            })}
          </select>
        </div>

        <button className="btn btn-primary m-3" type="submit">
          Sign up
        </button>
      </form>

      <div className="m-3">
        <p>{state.greeting}</p>
        <p>{state.textEmail}</p>
      </div>
    </div>
  );
}

export default SignupPage;
