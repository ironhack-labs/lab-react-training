import React from 'react';

function Greeting({ lang, children }) {
  return (
    <div className="box">
      {lang === 'de' && <p>Hallo {children}</p>}
      {lang === 'en' && <p>Hello {children}</p>}
      {lang === 'es' && <p>Hola {children}</p>}
      {lang === 'fr' && <p>Bonjour {children}</p>}
    </div>
  );
}

export default Greeting;
