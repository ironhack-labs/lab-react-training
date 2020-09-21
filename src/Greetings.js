import React from 'react';


function Greetings (props) {
    let greetings = {
        de: 'Hallo',
        en: 'Hello',
        fr: 'Bonjour',
        es: 'Hola',
    }
    return (
        <div className="greetings-box">
          {greetings[props.lang]} {props.children}
        </div>
    );
}

export default Greetings; 