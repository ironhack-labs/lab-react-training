import React from 'react';

export default function Greetings(props) {
  if (props === 'de') {
    return <span>"Hallo"</span>;
  } else if (props === 'en') {
    return <span>"Hello"</span>;
  } else if (props === 'es') {
    return <span>"Hola"</span>;
  } else if (props === 'fr') {
    return <span>"Bonjour"</span>;
  } return null
};
