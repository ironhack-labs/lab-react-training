import React from 'react';
import {Form, InputGroup, Col, Button} from 'react-bootstrap';

export default class SignupPage extends React.Component {
    constructor(props) {
        super(props)
        [this.validated, this.setValidated] = useState(false);

        this.handleSubmit = (event) => {
            this.form = event.currentTarget;
            if (this.form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

            setValidated(true);
        };
    }

    render() {
        return (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        );
    }
}

// export default class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           email: "",
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
  
//     handleChange(e) {
//       this.setState({
//         [e.target.name]: e.target.value,
//       });
//     }
  
//     handleSubmit(e) {
//         e.preventDefault();
//         console.log(this.state);
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <InputWithLabel
//             name="username"
//             value={this.state.username}
//             onChange={this.handleChange}
//           />
//           <TextareaWithLabel
//             name="description"
//             value={this.state.description}
//             onChange={this.handleChange}
//           />
//           <SelectWithLabel
//             name="cats"
//             value={this.state.cats}
//             onChange={this.handleChange}
//             options={catOptions}
//           />
//           <button type="submit">Enviar</button>
//         </form>
//       );
//     }
//   }
  