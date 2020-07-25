import React, { Component } from 'react';

export class Personas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nombre: '',
        apellido: '',
      },
      personas: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault(); // Para que no parpadee

    const copyPersons = [...this.state.personas];
    copyPersons.push(this.state.form);
    this.setState({
      form: { nombre: '', apellido: '' },
      personas: copyPersons,
    });
  };

  render() {
    const listado = this.state.personas.map((person) => (
      <h1 key={person.nombre}>{person.nombre}</h1>
    ));

    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="form-group">
          <label>Nombre:</label>
          <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="nombre"
            value={this.state.form.nombre}
          />
          <label>Apellido:</label>
          <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="apellido"
            value={this.state.form.apellido}
          />
          <input className="btn btn-warning" type="submit" value="Submit" />
        </form>
        {listado}
      </div>
    );
  }
}

export default Personas;
