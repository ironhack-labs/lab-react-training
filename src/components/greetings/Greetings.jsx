import React from 'react';
import './greetings.css';

const langs = {
  de: 'Hallo',
  en: 'Hello',
  fr: 'Bonjour',
};

function Greetings({ lang, children }) {
  // const Greetings = (props) => {
  // let greeting;
  // if (props.lang === 'de') {
  //   return (
  //     <div className="greetings">
  //       <div>
  //         {(greeting = 'Hallo')} {props.children}
  //       </div>
  //     </div>
  //   );
  // }
  // if (props.lang === 'fr') {
  //   return (
  //     <div className="greetings">
  //       <div>
  //         {(greeting = 'Bonjour')} {props.children}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="greetings">
      {langs[lang]} {children}
    </div>
  );
}

export default Greetings;
