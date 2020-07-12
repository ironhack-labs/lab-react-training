import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignupPage extends Component {
  nationalityOnChange = (nat) => {
    let helloText = 'Hello';
    switch (nat.value) {
      case 'de':
        helloText = 'Hallo';
        break;
      case 'fr':
        helloText = 'Bonjour';
        break;
      default:
        helloText = 'Hello';
        break;
    }
  };
  render() {
    return (
      <div>
        <div class="form-group">
          <label for="emal">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder=""
          />
          <small id="emailHelpId" class="form-text text-muted">
            Put your email address
          </small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder="Put yor password"
          />
        </div>
        <div class="form-group">
          <label for="nationality">Nationality</label>
          <select
            class="form-control"
            name="nationality"
            id="nationality"
            onChange={() => this.nationalityOnChange(this)}
          >
            <option value="en">England</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">
          Signup
        </button>
        <span></span>
      </div>
    );
  }
}
export default SignupPage;
