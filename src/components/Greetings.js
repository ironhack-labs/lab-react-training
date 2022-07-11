import React from 'react';

export default function Greeting(props) {
  const lang = props.lang;
  let children;

  if (lang === 'en') {
    children = 'Hello ';
  } else if (lang === 'es') {
    children = 'Hola ';
  } else if (lang === 'fr') {
    children = 'Bonjour ';
  } else if (lang === 'de') {
    children = 'Hallo ';
  }
  return (
    <>
      <div className="border mw-50 m-5 py-5">
        <span className="greeting">
          {children} {props.children}
        </span>
      </div>
    </>
  );
}
