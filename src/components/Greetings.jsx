import React from 'react'

function Greetings(props) {
    const {lang, text} = props
    if(lang === 'de') {
       return <p className="greeting">Hallo {text}</p> ;
   } else if (lang === 'fr'){ 
       return <p className="greeting">Bonjour {text}</p>;

   } else if(lang === 'es') {
       return <p className="greeting">Buenas {text}</p>;

   } else if(lang === 'en') {
    return <p className="greeting">Hello {text}</p>};
   }

export default Greetings