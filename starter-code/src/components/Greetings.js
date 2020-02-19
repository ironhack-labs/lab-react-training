import React from 'react'

function Greetings({lang, children}) {
    let saludo = ''
    switch(lang){
        case 'es': saludo = 'hola';
        break;
        case 'de': saludo = 'hallo';
        break;
        case 'en': saludo = 'hello';
        break;
        case 'fr': saludo = 'salut';
        break;
    }
    return (
        <div>
            {saludo}
            {children}
        </div>
    )
}

export default Greetings
