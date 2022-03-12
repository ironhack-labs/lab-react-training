import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function SingupPage(params) {
  const [state, setState] = useState({
    email: '',
    password: '',
    nationality: '',
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  console.log(state);
  return (
    <>
      <form
        className="was-validated"
        onSubmit={(_) => alert(state.nationality)}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control "
            id="email"
            name="email"
            placeholder="name@example.com"
            value={state.email}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">Formato de e-mail invalido</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            pattern=".{8,}"
            title="Eight or more characters"
            required
          ></input>
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">Precisa ter mais de 8 digitos</div>
        </div>
        <div className="mb-3">
          <label htmlFor="nationality" className="form-label">
            Nacionalidade
          </label>
          <select
            name="nationality"
            className="form-select"
            id="nationality"
            value={state.nationality}
            onChange={handleChange}
            required
          >
            <option defaultValue disabled value="">
              Escolha...
            </option>
            <option value="brasileiro">brasileiro</option>
            <option value="argentino">argentino</option>
            <option value="paraguaio">paraguaio</option>
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            submit
          </button>
        </div>
      </form>
      <div>
        <h2>Ola</h2>
        <h2>Seu email é: {state.email}</h2>
      </div>
    </>
  );
}

export default SingupPage;
