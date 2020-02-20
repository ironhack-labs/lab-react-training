import React, { Component } from 'react';

class Greetings extends Component {

  render() {
    switch (this.props.lang) {
      case "es":
        return (
          <div className="Greetings"><p>{ "Hola "}  {this.props.children}</p></div>
        );
        //break;
      case "en":

      return (
        <div className="Greetings"><p>{ "Hello "}  {this.props.children}</p></div>
      );
      //break;
      case "fr":

      return (
        <div className="Greetings"><p>{ "Bonjour "}  {this.props.children}</p></div>
      );
      //break;
      default:

      return (
        <div className="Greetings"><p>{ "  "}  {this.props.children}</p></div>
      );
    }

    // 1. crear variable mensaje
    // 2. hacer un condicional switch
    // 3. dependiendo el caso si el lenguaje es x entonces mensaje va decir "hola,hellow,etc"




  }
}

export default Greetings;
