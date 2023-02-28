import React from 'react';

function Greetings(props) {
  const { lang, children } = props;
  return (
    <div>
      {lang === 'de' && <p>Hallo {children}</p>}
      {lang === 'en' && <p>Hello {children}</p>}
      {lang === 'es' && <p>Hola {children}</p>}
      {lang === 'fr' && <p>Bonjour {children}</p>}
    </div>
  );
}

export default Greetings;
