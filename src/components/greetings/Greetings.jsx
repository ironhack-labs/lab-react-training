import React from "react";
import "./Greetings.css";

const greetingLang = (lang) => {
let message = ""

    switch(lang){
        case "es":
             message ="Hola"
        break;
        case "de":
            message = "Hallo"
        break;
        case "fr":
            message = "Bonjour"
        break;
        default:
            message =  "Hello"
    } 
    return message
}

export default class Greetings extends React.Component {

    render() {
        return (
        <div className="Greetings greetingBox">
            <p>{greetingLang(this.props.lang)} {this.props.children}</p>
        </div>
        );
    }
}