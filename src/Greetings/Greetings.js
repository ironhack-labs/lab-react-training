import React from 'react';

function Greetings(props) {
  const language = { de: 'Hallo', en: 'Hello', es: 'Holla', fr: 'Bonjour' };
  function renderClassNames(props) {
    return language[props];
  }

  return (
    <div
      style={{
        border: 'solid 1px',
        margin: '0.8% auto',
        padding: '0.4%',
      }}
    >
      {renderClassNames(props.lang)} {props.children}
    </div>
  );
}

export default Greetings;
