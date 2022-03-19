import React from 'react';

const langs = {
  de: "Hallo",
  en: "Hello",
  es: "Hola",
  fr: "Bonjour"
}


const Greetings = ({lang, children}) => {
  return (
    <div className="alert alert-primary" role="alert">
      {langs[lang]} {children}
    </div>
  );
};


export { Greetings }