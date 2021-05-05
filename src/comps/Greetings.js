// imports
import React from 'react';

//components
class Greetings extends React.Component {
  checkLang(lang) {
    return {
      de: 'Hallo',
      fr: 'Bonjour',
      en: 'Hello',
      es: 'Hola',
    }[lang];
  }
  render() {
    const { lang, children } = this.props;
    return (
      <div className="card">
        <p>
          {this.checkLang(lang)} {children}
        </p>
      </div>
    );
  }
}

// exports
export default Greetings;
