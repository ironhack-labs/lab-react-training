
import React, { Component } from 'react';

class Greetings extends Component{
    render(){
        const greeting = {
            "de": "Hallo",
            "en": "Hello",
            "es": "Hola",
            "fr": "Bonjour",
        }

        const {lang, children} = this.props;

        return(
            <div>
                <div className="content-greeting">{greeting[lang]} {children}</div>
            </div>
        )
    }
    
}

export default Greetings;