import React, { Fragment } from 'react';

export default function Greetings(props) {
  const languages = {
    de: 'Hallo',
    en: 'Hello m8',
    es: 'Amigo',
    kr: 'Annyung',
  };
  return (
    <p>
      {languages[props.lang]} {props.children}
    </p>
  );
}
