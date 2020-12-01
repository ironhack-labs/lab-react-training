import React from 'react';
import './Greetings.css'

function Greetings(props){   
let lang = "" 
if (props.lang === 'de'){
   lang = 'Hallo'
} else if (props.lang === 'es'){
    lang = 'Hola'
} else if (props.lang === 'en'){
    lang = 'Hello'
} else if  (props.lang === 'fr'){
     lang = 'Bonjour'
} else {
    lang = 'Hello'
}
    return(
        <div className='Greetings'>
        <p>{lang} {props.children}</p>
        </div>
    );
}
 export default Greetings;