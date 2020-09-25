import React from 'react';

function Greetings (props){

  function renderGreeting (lang) {
      const greetings = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
      }
      return greetings[lang];
    };

    return (
    <div className="box">
{`${renderGreeting(props.lang)} ${props.children}`}
</div>)
}

export default Greetings; 