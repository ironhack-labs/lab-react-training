import React from 'react';
import './Greetings.css';

export default function Greetings(props) {
  const greetings = {
    en: 'Hello!',
    de: 'Guten Tag!',
    es: 'Hola!',
    fr: 'Bonjour!',
  };
  return (
    <>
      <div className="greetings-box">
        {greetings[props.lang]} {props.children}
      </div>
    </>
  );
}
