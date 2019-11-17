import React, { Component } from "react";

export default class Greetings extends Component {
  render() {
    let hello;
    if (this.props.lang === "fr") {
      hello = "Bonjour";
    } else hello = "Hallo";
    return (
      <div className="col-10 box">
        <h4>
          {hello} {this.props.children}
        </h4>
      </div>
    );
  }
}
