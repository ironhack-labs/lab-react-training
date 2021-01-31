import React, {Component} from 'react';
import {Alert, Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';

class SignupPage extends Component {
	state = {
		email: '',
		validEmail: false,
		password: '',
		validPassword: false
	};

	emailValidation = (event) => {
		const email = event.target.value;
		const regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z][a-z]+)|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		const test = regEx.test(email);
		this.setState({
			email: email,
			validEmail: test
		});
	};

	passwordValidation = (event) => {
		const password = event.target.value;
		const regEx = /[a-zA-Z0-9]{8,}/;
		const test = regEx.test(password);
		this.setState({
			password: password,
			validPassword: test
		});
	};

	showSuccess = (input, category) => {
		if (input) {
			switch (category) {
				case 'email':
					return (
						<Alert color="success">
							Your email is valid!
						</Alert>
					);
					break;
				case 'password':
					return (
						<Alert color="success">
							Your password is valid!
						</Alert>
					);
					break;
				default:
					break;
			}
		}
	};

	showFailure = (input, category) => {
		if (input) {
			switch (category) {
				case 'email':
					return (
						<Alert color="danger">
							Your email is not valid! Your email should be in in the format:
							example@example.com
						</Alert>
					);
					break;
				case 'password':
					return (
						<Alert color="danger">
							Your password should contain at least 8 characters and one Uppercase,
							one Lowercase and one Diget.
						</Alert>
					);
					break;
				default:
					break;
			}
		}
	};

	render() {
		return (
			<div>
				<Container>
					<h1>Signup Page</h1>
					<Form>
						<FormGroup>
							<Label for="email">Email</Label>
							<Input type="email"
								   name="email"
								   id="email"
								   placeholder="example@example.com"
								   onChange={event => this.emailValidation(event)}/>
							{this.state.validEmail ? this.showSuccess(this.state.email, 'email') : this.showFailure(this.state.email, 'email')}
						</FormGroup>
						<FormGroup>
							<Label for="password">Password</Label>
							<Input type="password" name="password" id="password"
								   placeholder="password placeholder"
								   onChange={event => this.passwordValidation(event)}/>
							{this.state.validPassword ? this.showSuccess(this.state.password, 'password') : this.showFailure(this.state.password, 'password')}
						</FormGroup>
						<FormGroup>
							<Label for="nationality">Select</Label>
							<Input type="select" name="select" id="nationality">
								<option>Germany</option>
								<option>England</option>
								<option>France</option>
							</Input>
						</FormGroup>
						<Button>Submit</Button>
					</Form>
				</Container>
			</div>
		);
	}
}

export default SignupPage;