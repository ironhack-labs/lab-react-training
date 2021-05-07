import React, { Component } from 'react';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        email: '',
        password: '',
        nationality: '',
      },
      errors: {},
      output: {
        email: '',
        password: '',
        nationality: '',
      },
    };
  }

  //Captures 'select' value on submit and stores it on output with rest of values
  //Cleans the 'fields' state when done.
  handleSubmit(event) {
    event.preventDefault();
    const selectValue = event.target.querySelector('select').value;
    this.setState(
      {
        output: {
          ...this.state.fields,
          nationality: selectValue,
        },
      },
      () => {
        this.setState({
          fields: {
            email: '',
            password: '',
            nationality: '',
          },
        });
      }
    );
  }

  //Captures inputs value and changes 'fields' state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <form className="needs-validation" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={fields.email}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={fields.password}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <label htmlFor="password" className="form-label">
          Nationality
        </label>
        <select className="mb-3 form-select" aria-label="Select Nationality">
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
          <option value="British">British</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
