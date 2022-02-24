import React from "react";

function Greetings(props) {
    const{ lang, firstName } = props;

    const greetingLanguages = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    }

    return <h2>{ greetingLanguages[lang] }, { firstName }!</h2>
}

export default Greetings;