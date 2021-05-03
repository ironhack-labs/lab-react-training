import React from 'react';

const App = (props) => {
  const greetingsLang = { de: 'Hello', fr: 'Bonjour' };
  const greeting = greetingsLang[props.lang];
  return (
    <div class="box">
      {greeting} {props.children}
    </div>
  );
};

export default App;
