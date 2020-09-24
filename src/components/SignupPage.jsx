import React from 'react'
import './SignupPage.css'
import Greetings from './Greetings'

import InputWithLabel from "./Form/InputWhithLabel";
import SelectWithLabel from "./Form/SelecWhithLabel";


const nationality = [
  { "name" : "English",
    "value" : "en" },
    { "name" : "German",
    "value" : "de" },
    { "name" : "French",
    "value" : "fe" }]


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      Nationality: nationality[0].value,
      submit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
      e.preventDefault();
      this.setState({
        submit: true,
      })
  }

  render() {
    return (
      <div>

        <form  onSubmit={this.handleSubmit}>
          <InputWithLabel
            name="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <InputWithLabel
            name="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <SelectWithLabel
            name="Nationality"
            value={this.state.nationality}
            onChange={this.handleChange}
            options={nationality}
          />
          <button type="submit">Enviar</button>
        </form>
        {this.state.submit && 
        <div>
          <Greetings lang={this.state.Nationality}/>
          <div>
            Your email address is : {this.state.Email}
          </div>
          <div>
          Your email address is correct
          </div>
        </div>
          }
      </div>
    );
  }
}
