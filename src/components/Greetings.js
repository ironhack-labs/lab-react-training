import React from 'react';

class Greetings extends React.Component {
    
  traslation(langChoice) {
    let options = {
      de: 'Hallo',
      fr: 'Bonjour',
      es: 'Hola',
      en: 'Hello',
    };
    return options[langChoice] || 'The language is unknown to me';
  }

  render() {
    const { lang, children } = this.props;
    return (
      <div className='Greetings'>
        <h3>
          {this.traslation(lang)} {children}
        </h3>
      </div>
    );
  }
}

export default Greetings;
