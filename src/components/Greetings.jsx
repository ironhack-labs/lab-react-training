import React from 'react';



function Greetings({lang,children}){
const idiomas = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
}

 return (
     <div className="greetings"> {`${idiomas[lang]}  ${children}`}
     </div>)
}






export default Greetings;