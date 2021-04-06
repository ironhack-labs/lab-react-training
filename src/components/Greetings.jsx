import React from 'react';

class Greetings extends React.Component {
  render() {
    this.greetings = {
      en: 'Hello',
      de: 'Hallo',
      es: 'Hola',
      fr: 'Bonjour',
    };

    return (
      <article className="greeting">
        <p>
          <span>{this.greetings[this.props.lang]}</span> {this.props.children}
        </p>
      </article>
    );
  }
}

export default Greetings;
