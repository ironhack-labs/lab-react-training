import React from 'react';

function Greetings ({lang, children}){
function language(lang){
    if (lang === 'de') {
      return 'Hallo Ludwing';
    } else if (lang === 'en') {
      return 'Hello friend';
    } else if (lang === 'es') {
      return 'Hola amigo';
    } else if (lang === 'fr') {
      return 'Bonjour François';
    }

}
 return <div className="Card">{language(lang)}</div>;
}
  
 
 

  export default Greetings;