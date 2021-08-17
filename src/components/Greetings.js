import React from 'react';

class Greetings extends React.Component {
  lang = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  render() {
    return (
      <>
        <h1>Greetings</h1>
        <div className="singleCard">
          <p>
            {this.props.lang.de} {this.props.children}
          </p>
        </div>
      </>
    );
  }
}

export { Greetings };
