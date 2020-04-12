import React, { Component } from "react";
import "./Greetings.css";

export default class Greetings extends Component {
  language = (langValue) => {
    switch (langValue) {
      case "de":
        return "Hallo Ludwig";
      case "fr":
        return "Bonjour François";
      default:
        console.error("Language Undefinded");
    }
  };

  render() {
    const { lang } = this.props;

    return (
      <div className="greetings-container">
        <p>{this.language(lang)}</p>
      </div>
    );
  }
}
