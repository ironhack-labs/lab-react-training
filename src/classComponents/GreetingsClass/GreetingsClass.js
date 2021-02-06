import React from 'react';

class GreetingsClass extends React.Component {
  constructor(props) {
    super(props);
    this.hello = '';
    this.lang = this.props.lang;
    this.children = this.props.children;
  }

  setHello(lang) {
    if (lang === 'es') {
      this.hello = 'Hola';
    } else if (lang === 'de') {
      this.hello = 'Hallo';
    } else if (lang === 'en') {
      this.hello = 'Hello';
    } else {
      this.hello = 'Bonjour';
    }
    return this.hello;
  }
  render() {
    return (
      <article className="greeting">
        <p className="withBorder">
          <span>{this.setHello(this.lang)}</span> {this.children}
        </p>
      </article>
    );
  }
}

export default GreetingsClass;
