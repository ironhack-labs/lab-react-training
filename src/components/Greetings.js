// components/Greetings.js

import React from 'react';

const hello = {
  'en': 'Hello',
  'de': 'Hallo',
  'fr': 'Bonjour',
}

const Greetings = (props) => {
  const { lang, children } = props;
  return (
    <div class='greetings'>
      {hello[lang]} {children}
    </div>
  )
}

export default Greetings;
