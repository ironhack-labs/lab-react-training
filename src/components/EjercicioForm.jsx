import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
function EjercicioForm() {
  const initialState = {
    form: {
      nombre: '',
      apellido: '',
    },
    personas: [],
  };

  const [state, setState] = useState(initialState);

  const handleInput = (event) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  const inputSave = (evento) => {
    // VALIDAR!
    evento.currentTarget.checkValidity();

    const copyPersons = [...state.personas];
    copyPersons.push(state.form);

    setState({
      form: { nombre: '', apellido: '' },
      personas: copyPersons,
    });

    // enviar los datos al servidor...

    evento.preventDefault();
  };

  const listado = state.personas.map((person) => (
    <h1 key={person.nombre}>{person.nombre}</h1>
  ));

  return (
    <div>
      <form onSubmit={inputSave} className="form-group">
        <label>Nombre:</label>
        <input
          onChange={handleInput}
          className="form-control"
          type="text"
          name="nombre"
          value={state.form.nombre}
        />
        <label>Apellido:</label>
        <input
          onChange={handleInput}
          className="form-control"
          type="text"
          name="apellido"
          value={state.form.apellido}
        />
        <input className="btn btn-warning" type="submit" value="Submit" />
      </form>
      {listado}
    </div>
  );
}
export default EjercicioForm;
