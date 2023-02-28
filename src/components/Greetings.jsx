import React from 'react';

function Greetings(props) {
  const { lang, children } = props;
  if (lang === 'de') {
    return <p>Hallo {children}</p>;
  } else if (lang === 'en') {
    return <p>Hello {children}</p>;
  } else if (lang === 'es') {
    return <p>Holla {children}</p>;
  } else if (lang === 'fr') {
    return <p>Bonjour {children}</p>;
  }
}

export default Greetings;
