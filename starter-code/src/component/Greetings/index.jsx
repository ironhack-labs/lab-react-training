import React, { Component } from "react";

export class Greeting extends Component {
  render() {
    const lang = this.props.lang;
    let hello = "";
    console.log(this.props);
    if (lang === "de") {
      hello = "Hallo";
    } else if (lang === "en") {
      hello = "Hello";
    } else if (lang === "es") {
      hello = "Hola";
    } else if (lang === "fr") {
      hello = "Bonjour";
    }

    return <div class="card"> {hello} {this.props.children} </div>;
  }
}

export default Greeting;
