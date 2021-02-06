import React from 'react';

function Greetings(props) {
    let greeting = '';

    if(props.lang === 'en') {
        greeting = "Hello";
    }
    if(props.lang === 'fr') {
        greeting = "Bonjour";
    }
    if(props.lang === 'de') {
        greeting = 'Hallo';
    }
    if(props.lang === 'es') {
        greeting = 'Hola';
    }
    return (
        <div className='box'>
            <p>
                {greeting} {props.children}
            </p>
        </div>
    )
}

export default Greetings;