import React, { Component } from 'react';

class Greetings extends Component {

    languages = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    }


    render() {
        const {lang, children} = this.props;
        return(
            <div>
                <p>{this.languages[lang]}{children}</p>
            </div>
        )
    }
}


export default Greetings;