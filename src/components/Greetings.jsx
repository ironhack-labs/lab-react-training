import React from 'react';

function Greetings(props) {
  const { lang, children } = props;
  const greetingText =
    lang === 'de'
      ? `Hallo ${children}`
      : lang === 'fr'
      ? `Bonjour ${children}`
      : lang;
  return <div className="greeting-text">{greetingText}</div>;
}

export default Greetings;
