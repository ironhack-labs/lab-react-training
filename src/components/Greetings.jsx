import React from 'react';

function Greetings(props) {
  const languages = ['de', 'en', 'es', 'fr'];
  let { lang, children } = props;

  const checkLang = () => {
    if (lang === 'de') {
      return 'Hallo ';
    } else if (lang === 'en') {
      return 'Hello ';
    } else if (lang === 'es') {
      return 'Hola ';
    } else {
      return 'Bonjour ';
    }
  };
  return (
    <div>
      {checkLang({lang})} {children}
    </div>
  );
}

export default Greetings;
