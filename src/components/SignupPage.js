import React, { useState } from 'react';
import Greetings from './Greetings';

export const SignupPage = () => {
  const [usuario, setusuario] = useState({
    email: '',
    nacionalidad: 'en',
  });

  const [agregado, setagregado] = useState(null);

  const cambioInput = (event) => {
    setusuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
    console.log(usuario);
  };

  const agregar = (event) => {
    event.preventDefault()
    setagregado(usuario);
  };

  return (
    <div className="mt-5">
      <form onSubmit={agregar}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={usuario.email}
            onChange={cambioInput}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Nacionalidad</label>
          <select
            class="form-select"
            name="nacionalidad"
            onChange={cambioInput}
            value={usuario.nacionalidad}
          >
            <option value="en">Inglatera</option>
            <option value="fr">francia</option>
            <option value="de">Alemania</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary mt-5">
          Submit
        </button>
      </form>

      {agregado !== null ? (
        <>
          <br/>
          <Greetings lang={agregado.nacionalidad} >{agregado.email}</Greetings>
          <h1>tu email es : {agregado.email}</h1>
        </>
      ) : null}
    </div>
  );
};