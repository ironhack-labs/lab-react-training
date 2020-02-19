import React, { Component } from "react";

export default class Greetings extends Component { 
  render() {
    return (
      <div id="Box">
        <p>{this.props.lang==='en'? 'Hello':null}{this.props.lang==='es'? 'Hola':null}{this.props.lang==='de'? 'Hallo':null}{this.props.lang==='fr'? 'Bonjour':null} {this.props.children}</p>
      </div>
    );
  }
}
