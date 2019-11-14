import React, { Component } from "react";

export default class Greetings extends Component {
  gleetings = {
    de: "Hallo",
    en: "Hello",
    es: "Que bola",
    fr: "Bonjour"
  };

  render() {
    return (
      <div>
        <p>
          {this.gleetings[this.props.lang]} {this.props.children}
        </p>
      </div>
    );
  }
}
