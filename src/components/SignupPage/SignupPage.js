import React, { Component } from 'react';
import { REQUIRED_FIELD, REQUIRED_LENGTH, URL_VALID } from '../../utils/errors'
import { isRequiredValidator, lengthValidator, urlValidator } from '../../utils/validators'

const INITIAL_VALUES = {
  email: '',
  password: '',
  nationality: '',
};


const formSchema = {
    email: (value) => {
      if (isRequiredValidator(value)) {
        return REQUIRED_FIELD;
      }
      if (urlValidator(value)) {
        return URL_VALID
      }
    },
    password: (value) => {
      if (lengthValidator(value)) {
        return REQUIRED_LENGTH
      }
    }
  }



class SignupPage extends Component {
  state = {
    values: { ...INITIAL_VALUES },
    errors: {},
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        values: {
          ...prevState.values,
          [name]: value,
        },
      };
    });
  };

  isValidForm = () => {
    const { values } = this.state;
    const newErrors = {};

    Object.keys(values).forEach(valueKey => {
      const error = formSchema[valueKey](values[valueKey]) // Ejecuto el validador para cada uno de los campos

      if (error) {
        newErrors[valueKey] = error
      }
    })

    const hasErrors = Object.keys(newErrors).length > 0
    if (hasErrors) {
      this.setState({ errors: newErrors })
    }

    return !hasErrors;
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.isValidForm()) {
        this.setState({ values: {...INITIAL_VALUES}, errors: {} }) // Resetear el form
      }
  };


  render() {
    const { email, password, nationality, error } = this.state;
    return (
      <div className="formulario">
        <div className="formcontainer">
          <form className="m-4 form" onSubmit={this.onSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={this.onChange}
                name="email"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <input
                type="password"
                value={password}
                onChange={this.onChange}
                name="password"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id="password"
                placeholder="******"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">
                Nationality
              </label>
              <select
                name="nationality"
                onChange={this.onChange}
                value={nationality}
                className={`form-select ${error ? 'is-invalid' : ''}`}
                id="nationality"
              >
              <option value="">Select your language </option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">French</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupPage;
