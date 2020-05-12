import React, { Component } from "react";

export default class SignupPage extends Component {
  state = {
    email: "",
    password: "",
    greetings: ""
  };

  constructor() {
    super();
    this.updateGreeting = this.updateGreeting.bind();
  }

  updateMail = (e) => {
    
  }

  updateGreeting = (e) => {
    let nat = e.target.value;
    this.setState({greetings: (nat === "en" ? "Hello" : (nat === "de" ? "Hallo" : "Bonjour"))})
  }

  render() {
    return (
      <div>
          <section>
        <div>
          <div>
            <h3>Email</h3>
            <input type="text" />
            <span>You typed a valid email</span>
          </div>
          <div>
            <h3>Password</h3>
            <input type="password" name="password" onChange={(e) => this.updateMail(e)}/>
            <span>Your password is too weak</span>
          </div>
          <div>
            <h3>Nationality</h3>
            <select id="nationality" onChange={(e) => this.updateGreeting(e)}>
                <option value="en">English</option>
                <option value="de">Gernan</option>
                <option value="fr">French</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Sign up"></input>
          </div>
        </div>
      </section>
      <section>
          <span>{this.state.greetings}</span>
          <span>Your email address is: {this.state.email}</span>
          <span>Your email address is correct</span>
      </section>
      </div>
      
    );
  }
}
