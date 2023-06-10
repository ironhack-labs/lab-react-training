import React from 'react';

const dic = { en: 'Hello', de: 'Hallo', fr: 'Bonjour' };

function Greetings(props) {
  const message = dic[props.lang]; // "Bonjour"

  return (
    <div class="greeting">
      <span>{message}</span> {props.children}
    </div>
  );
}

export default Greetings;
