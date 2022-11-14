import React from 'react'

function Greetings({lang, children}) {

    let language = "";
  if (lang === 'de') {
    language = 'Hallo';
  } else if (lang === 'es') {
    language = 'Hola';
  } else if (lang === 'en') {
    language = 'Hello';
  } else if (lang === 'fr') {
    language = 'Bonjour';
  }

  return (
  <div className="greeting-box">
    {language}
    {children}
  </div>
);
};
export default Greetings;
