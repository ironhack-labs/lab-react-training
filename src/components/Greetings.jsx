import React from 'react';

function Greetings(props) {
  const { lang, children } = props;
  return (
    <div className="custom-card greeting-card">
      {lang === 'en' && (
        <p>
          <b>Hello {children}</b>
        </p>
      )}
      {lang === 'fr' && (
        <p>
          <b>Bonjour {children}</b>
        </p>
      )}
      {lang === 'de' && (
        <p>
          <b>Hallo {children}</b>
        </p>
      )}
      {lang === 'pt' && (
        <p>
          <b>Olá {children}</b>
        </p>
      )}
    </div>
  );
}

export default Greetings;
