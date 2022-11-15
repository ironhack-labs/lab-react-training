import React from 'react'

function Greetings(props) {
    const { lang, children } = props;
    let greeting = '';
    switch (lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'es':
            greeting = 'Holla';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        default:
            return;
    }
    return (<p>{greeting} {children}</p>)
}

export default Greetings