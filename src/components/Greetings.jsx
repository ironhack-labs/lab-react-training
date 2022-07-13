import React from 'react';

const Greeting = ({lang, children}) =>{
    
    switch(lang){
        case 'es':
            return (
                <div>
                    <p>Hola {children}</p>
                </div>
            )
        case 'fr':
            return (
                <div>
                    <p>Bonjour {children}</p>
                </div>
            )
        case  'de':
            return (
                <div>
                    <p>Hallo {children}</p>
                </div>
            )
        case 'en':
            return (
                <div>
                    <p>Hello {children}</p>
                </div>
            )
    }
    
}

export default Greeting