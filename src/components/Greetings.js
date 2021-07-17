import React from 'react'

function greetings({lang, children}) {
    let greeting = "";

    if(lang === 'de'){
        greeting = 'Hallo';
     } else if (lang === 'en'){
         greeting ='hello';         
     } else if(lang ==='es'){
         greeting = 'Hola';         
     }else if(lang === 'fr'){
         greeting = 'Bonjour';
     }
     return <div className="container">{`${greeting} ${children}`}</div>;
}
export default greetings;