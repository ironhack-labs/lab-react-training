import React, { Component } from "react";

class Greetings extends Component {
  render() {
    const greetings = {
      de: "Hallo",
      en: "Hello",
      fr: "Bonjour",
      es: "Hola"
    };
    
    return (
      <div className="Box">
        {greetings[this.props.lang]} {this.props.children}
      </div>
    );
  }
}

export default Greetings;