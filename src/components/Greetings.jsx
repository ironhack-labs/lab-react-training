import React from 'react';

function Greetings(props) {
  function checkLang(lang) {
    switch (lang) {
      case 'fr':
        return 'Bonjour ';
      case 'vn':
        return 'Xin Chao ';
      case 'en':
        return 'Hello ';
      case 'es':
        return 'Hola ';
      default:
        return 'OLÁ ';
    }
  }
  return (
    <div className="greet">
      <span>{checkLang(props.lang)} </span>
      <span>{props.children} </span>
    </div>
  );
}

export default Greetings;
