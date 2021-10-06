import React from 'react';

const Greetings = (props) => {
  console.log(props);
  const { lang, children } = props;
  switch (lang) {
    case 'de':
      return <div>Hallo {children}</div>;
    case 'en':
      return <div>Hi {children}</div>;
    case 'es':
      return <div>Hola {children}</div>;
    case 'fr':
      return <div>Bonjour {children}</div>;
    default:
      return <div>Hola {children}</div>;
  }
};

export default Greetings;