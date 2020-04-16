import React, { Component } from "react";





class Greetings extends Component {

    tongue = (lang) => {
        let result = "";

        switch (lang) {
            case "de": result = "Hallo "; break;
            case "en": result = "Hello "; break;
            case "es": result =  "Hola perro , "; break;
            case "fr": result = "Bonjour "; break;
            default: result = "" 
        }
            return result;  }

	render() {
        const {lang, children} = this.props;
    return(
    <div className ="box">
        <p>
            {this.tongue(lang)} {children}
        </p>

    </div>
        
    )
}}
    

export default Greetings;