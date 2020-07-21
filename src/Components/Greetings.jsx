import React from 'react';
import './../App.css';

const Greetings = (props) => {
  function handleLang(lang) {
    if (lang == 'de') {
      return <span>Hallo {props.text}</span>;
    } else if (lang == 'fr') {
      return <span>Salut {props.text}</span>;
    } else if (lang == 'es') {
      return <span>Holà {props.text}</span>;
    } else {
      return <span>Hello{props.text}</span>;
    }
  }

  return (
    <div className="greeting">
      <p>{handleLang(props.lang)}</p>
    </div>
  );
};
export default Greetings;
