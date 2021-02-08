import React from 'react';

export function Greetings({ lang, children }) {
  console.log('children:', children);

  if (lang === 'de') {
    return <p>Grüße {children}</p>;
  }
  if (lang === 'en') {
    return <p>Welcome {children}</p>;
  }
  if (lang === 'es') {
    return <p>Bienvenido {children}</p>;
  }
  if (lang === 'fr') {
    return <p>Cordialement {children}</p>;
  }
  return null
}

// Greetings ==> { lang: ["de","en","es","fr"] children: "tomas" }
