// import React, { Component } from 'react';

// export class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   handleInput = (event) => {
//     // cambiar el state cuando e ususuario
//     // event.persist() ---> Prueba si el evento está persistido

//     // this.setState(currentState => ({
//     //     ...currentState,

//     //     [event.target.name]: event.target.value
//     // })

//     // )

//     this.setState({ [event.target.name]: event.target.value });
//   };

//   //funcion para tomar lo del formulario

//   inputSave = (evento) => {
//     console.log('UserName', this.state.username);
//     console.log('PASSWORD', this.state.password);
//     evento.preventDefault();
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.inputSave}>
//           <label> User Name</label>
//           <input
//             type="text"
//             name="username"
//             onChange={this.handleInput}
//             value={this.state.username}
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleInput}
//             value={this.state.password}
//           />

//           <input type="submit" value="login">
//             Login
//           </input>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;

import React, { Component } from 'react';
import { Form, FormGroup } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validated: false,
    };
  }
  handleInput = (event) => {
    // cambiar el state cuando el usuario entre la información en el form
    // Persistir el Evento para uso dentro del CLOSURE!
    // event.persist()
    // this.setState(currentState => ({
    //     ...currentState,
    //     [event.target.name]: event.target.value
    // }))
    this.setState({ [event.target.name]: event.target.value });
  };
  // funcion para guardar / utilizar los que está puesto en el formulario
  inputSave = (evento) => {
    //valicación

    evento.currentTarget.checkValidity();
    console.log('Form valido', evento.currentTarget.checkValidity());

    this.setState({ validated: true });

    console.log('username: ', this.state.username);
    console.log('password: ', this.state.password);
    evento.preventDefault();
  };
  render() {
    return (
      <div>
        <Form
          onSubmit={this.inputSave}
          noValidate
          validated={this.state.validated}
        >
          <FormGroup>
            <Form.Label>User Name </Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              onChange={this.handleInput}
              value={this.state.username}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              ES UN CAMPO OBLIGAORIO
            </Form.Control.Feedback>
          </FormGroup>

          <FormGroup>
            <Form.Label>Password </Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              onChange={this.handleInput}
              value={this.state.password}
            />
          </FormGroup>

          <input type="submit" value="Login" />
        </Form>
      </div>
    );
  }
}
export default Login;
