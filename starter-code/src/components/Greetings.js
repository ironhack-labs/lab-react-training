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





  }
}

export default Greetings;
