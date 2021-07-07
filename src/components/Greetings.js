import React from 'react';
function Greetings({ lang, children }) {
  const greeting = lang === 'fr' ? 'Bonjour' : 'Hallo';
  return (
    <div className="greetingContainer">
      <p>
        <b>
          {' '}
          {greeting} {children}
        </b>
      </p>
    </div>
  );
}

export default Greetings;
