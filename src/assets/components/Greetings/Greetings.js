import React from 'react';
import './Greeting.css';

const Greetings = ({lang, children }) => {
    return (
      <div className="card-greeting">
        {lang === 'de' && 'Hallo '}
        {lang === 'es' && 'Hola '}
        {lang === 'en' && 'Hi'}
        {lang === 'fr' && 'Bonjour '}
        {children}
      </div>

    )
  }

export default Greetings;
