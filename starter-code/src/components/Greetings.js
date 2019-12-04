import React, { Component } from "react";
import { Greet } from "../styles/components";
export default class Great extends Component {
  render() {
    switch (this.props.lang) {
      case "de":
        return (
          <Greet>
            <p>Hallo {this.props.children}</p>
          </Greet>
        );
      case "fr":
        return (
          <Greet>
            <p>Bonjour {this.props.children}</p>
          </Greet>
        );
      case "en":
        return (
          <Greet>
            <p>Hello {this.props.children}</p>
          </Greet>
        );
      case "es":
        return (
          <Greet>
            <p>Hola {this.props.children}</p>
          </Greet>
        );
      default:
        return (
          <Greet>
            <p>¿Lo quieres en esperanto o qué pedo?</p>
          </Greet>
        );
    }
  }
}
