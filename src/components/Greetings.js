import React from 'react';

function Greeting(props) {
  const { lang, children } = props;

  return (
    <div>
      {lang === 'en' && <h3>Hello {children}</h3>}
      {lang === 'fr' && <h3>Bonjour {children}</h3>}
      {lang === 'de' && <h3>Hallo {children}</h3>}
      {lang === 'es' && <h3>Hola {children}</h3>}
    </div>
  );
}

export default Greeting;
