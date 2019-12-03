import React, { Component } from "react";
import "./Greetings.css";

class Greetings extends Component {
  render() {
    const children = this.props.children;
    const language = this.props.lang;
    const greetings = {
      de: "Hallo",
      en: "Hello",
      es: "Hola",
      fr: "Bounjour"
    };

    return (
      <div className="border rounded-sm mb-2">
        <p>
          {greetings[language]} {children}
        </p>
      </div>
    );
  }
}

export default Greetings;
