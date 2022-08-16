import React from 'react'

function Greetings(props) {
    let {lang, children} = props;
    switch(lang){
        case 'de':
            lang = 'Hallo';
            break;
        case 'en':
            lang = 'Hello';
            break;
        case 'es':
            lang = 'Hola';
            break;
        case 'fr':
            lang ='Bonjour';
            break;
        default:
            return 'N/A';
            break;
    }   
  return (
      <div className='Greetings'> {lang} {children} </div>
  )
}

export default Greetings