import React from 'react';

class Greetings extends React.Component {
    
  traslation(langChoice) {
    let options = {
      de: 'hallo',
      fr: 'Bonjour',
      es: 'Hola',
      en: 'Hello',
    };
    return options[langChoice] || 'The language is unknown to me';
  }

  render() {
    const { lang, children } = this.props;
    return (
      <div>
        <h3 className="fw-light">
          {this.traslation(lang)} {children}
        </h3>
      </div>
    );
  }
}

export default Greetings;
