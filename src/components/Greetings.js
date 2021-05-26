import React, { useState } from 'react';

export default function Greetings(props) {
  console.log(props);
  let palabra = '';

  switch (props.lang) {
    case 'de':
      palabra = `hallo ${props.children}`;

      break;
    case 'fr':
      palabra = `Bonjour ${props.children}`;

      break;
    case 'es':
      palabra = `Hola ${props.children}`;

      break;
    case 'en':
      palabra = `Hello ${props.children}`;

      break;
  }

  return (
    <>
          <div className="container tabla">
              {palabra}
      </div>
      <br />
    </>
  );
}