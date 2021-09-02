import React from 'react';
import './SignupPage.css';

const initialState = {
  email: '',
  password: '',
  nationality: '',
  valid: {
    email: '',
    password: '',
  },
};

const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

export default class SignupPage extends React.Component {
  state = { ...initialState };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.calories || !this.state.image) {
      return;
    }
    this.props.onSignupPage(this.state);
    this.setState({ ...initialState });
  };

  isValid = (event) => {
    const { value, name } = event.target;
    const duplicateValid = { ...this.state.valid };

    console.log(value);
    console.log(name);

    if (!emailRegex.test(value)) {
      duplicateValid.email = false;
    } else {
      duplicateValid.email = true;
    }
    if (name && name.length >= 8) {
      duplicateValid.password = true;
    } else {
      duplicateValid.password = false;
    }

    // console.log(this.state.valid);

    this.setState({ valid: { ...duplicateValid } });
  };

  render() {
    return (
      <form className="SignupPage container" onSubmit={this.onSubmit}>
        <input
          className={
            this.state.valid.email === false
              ? 'form-control  is-invalid'
              : this.state.valid.email === true
              ? 'form-control is-valid'
              : ''
          }
          type="email"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={(e) => this.onChange(e)}
        />
        {this.state.valid.password === true ? (
          <div className="valid-feedback">You typed a valid email</div>
        ) : (
          <div className="invalid-feedback">You typed an invalid email</div>
        )}

        <input
          className={
            this.state.valid.password === false
              ? 'form-control  is-invalid'
              : this.state.valid.password === true
              ? 'form-control is-valid'
              : ''
          }
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={(e) => this.onChange(e)}
        />
        {this.state.valid.password === true ? (
          <div className="valid-feedback">Your password is strong</div>
        ) : (
          <div className="invalid-feedback">Your password is too weak</div>
        )}

        <div className="checkbox">
          <div>
            <input
              type="radio"
              name="nationality"
              value="en"
              onChange={(e) => this.onChange(e)}
            />
            <label>EN</label>
            <input
              type="radio"
              name="nationality"
              value="fr"
              onChange={(e) => this.onChange(e)}
            />
            <label>FR</label>
          </div>
          <div>
            <input
              type="radio"
              name="nationality"
              value="de"
              onChange={(e) => this.onChange(e)}
            />
            <label>DE</label>
          </div>
        </div>
        {(this.state.nationality.length && this.state.email.length) >= 1 && (
          <div className="Signin">
            <p>
              {this.state.nationality === 'en'
                ? 'Hello'
                : this.state.nationality === 'fr'
                ? 'Bonjour'
                : 'Hallo'}{' '}
              your email is {this.state.email}
            </p>
            <button
              className="btn btn-info"
              value={this.state.email}
              name={this.state.password}
              onClick={(event) => this.isValid(event)}
            >
              Sign in
            </button>
          </div>
        )}
      </form>
    );
  }
}
