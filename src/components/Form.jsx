import React, { Component } from 'react';
import 'bulma/css/bulma.css';


export default class Form extends Component {
  state = {
    email: '',
    password: '',
    selectInputValue: 'Please Select',
  };

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Email</label>
        <input
          className="input"
          name="email"
          type="email"
          placeholder="chris@gmail.com"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <label>Password</label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="pw"
          value={this.state.password}
          onChange={(e) => this.handleChange(e)}
        ></input>

        <label> Language: </label>
        <br />
        <div className="select">
          <select
            name="selectInputValue"
            value={this.state.selectInputValue}
            onChange={(e) => this.handleChange(e)}
          >
            <option value={this.state.selectInputValue}>
              {this.state.selectInputValue}
            </option>
            <option value="de">German</option>
            <option value="fr">French</option>
            <option value="en">English</option>
          </select>
        </div>
        <br />
        <hr />
        <br />
        {this.state.selectInputValue === 'en' ? <h3> Hello </h3> : ''}
        {this.state.selectInputValue === 'de' ? <h3> Hallo </h3> : ''}
        {this.state.selectInputValue === 'fr' ? <h3> Bonjour </h3> : ''}
      </form>
    );
  }
}
