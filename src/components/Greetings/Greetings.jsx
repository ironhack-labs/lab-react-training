import React from 'react';
import './Greetings.css';
import '../../App.css';

const selecLang = {
  de: 'Hallo',
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
};

const Greetings = ({ lang, children }) => {
  return (
    <div className="Grettings">
      {selecLang[lang]} {children}
    </div>
  );
};

export default Greetings;
