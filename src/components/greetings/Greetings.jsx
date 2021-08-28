import React from 'react';
import './Greetings.css'

export default class Greetings extends React.Component {
  render() {
    const { children, lang } = this.props;
    const greeting = () => {
      if (lang === 'de') return 'Hallo';
      if (lang === 'en') return 'Hello';
      if (lang === 'es') return 'Hola';
      if (lang === 'fr') return 'Bonjour';
    };

    return (
      <div className="Greetings">
        <h1>
          <span>{greeting()}</span> <span>{children}</span>
        </h1>
      </div>
    );
  }
}
