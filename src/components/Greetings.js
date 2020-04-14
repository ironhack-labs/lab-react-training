import React, { Component } from "react";

//IT.2
class Greetings extends Component {

    greets={
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    }
    render() {
        const {lang, children} = this.props;
        return(
            <div>
                <p>{this.greets[lang]}{children}</p>
            </div>
        )
    }
}


export default Greetings; 
