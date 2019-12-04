import React, { Component } from "react";

class Greetings extends Component {
  render() {
    const props = this.props;
    const greetings = { de: "Hallo", en: "Hello", es: "Hola", fr: "Bonjour" };
    return (
      <div>
        <h3>
          {greetings[props.lang]} {props.children}
        </h3>
      </div>
    );
  }
}

export default Greetings;
