import React from 'react';

const Greetings = (props) => {
    return(
        <div>
            <p>{props.lang === 'de' ? 'Hallo'
                : props.lang === 'fr' ? 'Bonjour'
                : props.lang === 'es' ? 'Hola'
                : 'Hello' 
                }
            </p>
            <p>{props.children}</p>
        </div>
    )
}

export default Greetings;
