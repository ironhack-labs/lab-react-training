import React from 'react';

const Greetings = ({lang, children }) => {
    return (
      <div>
        {lang === 'de' && 'Hallo '}
        {lang === 'es' && 'Hola '}
        {lang === 'en' && 'Hi'}
        {lang === 'fr' && 'Bonjour '}
        {children}
      </div>

    )
  }

export default Greetings;
