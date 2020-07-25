import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
function LoginFC() {
  const initialState = {
    username: '',
    password: '',
    selectInputValue: '',
    validated: false,
  };
  const [state, setState] = useState(initialState);
  const handleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const inputSave = (evento) => {
    // VALIDAR!
    evento.currentTarget.checkValidity();
    console.log('Form valido? ', evento.currentTarget.checkValidity());
    setState({
      ...state,
      validated: true,
    });
    // enviar los datos al servidor...
    console.log('username: ', state.username);
    console.log('password: ', state.password);
    console.log('select: ', state.selectInputValue);
    evento.preventDefault();
  };
  return (
    <div className="Login">
      <Form onSubmit={inputSave} noValidate validated={state.validated}>
        <FormGroup>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            required
            onChange={handleInput}
            value={state.username}
            placeholder="Ingrese aqui tu username"
          />
          <Form.Control.Feedback>
            Está bien! Gracias por llenar el campo!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Username es mandatorio
          </Form.Control.Feedback>
        </FormGroup>
        <FormGroup>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            onChange={handleInput}
            value={state.password}
            placeholder="Ingrese aqui tu contrasena"
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
export default LoginFC;
