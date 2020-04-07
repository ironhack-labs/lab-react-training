import React from 'react';

const checkLang = (lang) => {
    switch (lang){
        case 'es':
            return 'Hola';
        case 'fr':
            return 'Bonjour';
        case 'de':
            return 'Hallo';
        default:
            return 'Hello';
    }
};

const Greeting= (props) => {
    const greeting = checkLang(props.lang)
    return (
        <div class="box">{greeting} {props.children}</div>
    );
};
    
export default Greeting;