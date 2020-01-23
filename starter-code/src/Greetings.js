import React, { Component } from 'react';
import "./index.css";

class Greetings extends Component {

    render() {
        //let greeting = "";
        //switch (this.props.lang) {
        //    case "de":
        //        greeting = "Hallo";
        //        break;
        //    case "fr":
        //        greeting = "Bonjour";
        //        break;
        //    case "en":
        //        greeting = "Hello";
        //        break;
        //    case "es":
        //        greeting = "Hola";
        //        break;
        //    default:
        //        greeting = "No language selected";
        //}

        const greeting = {"fr": "Bonjour", "de": "Hallo", "es": "Hola", "en": "Hello"}
        return (
            <div className="image">
                <span> {greeting[this.props.lang]||"No language selected"} {this.props.children}</span>
            </div>
        )
    }
}



export default Greetings;