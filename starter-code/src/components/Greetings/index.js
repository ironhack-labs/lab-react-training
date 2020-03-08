import React, { Component } from 'react';
import './style.css';

class Greetings extends Component {
  render() {
    const { lang } = this.props;
    switch (lang) {
      case 'de':
        return <span className="greeting-card">Hallo {this.props.children}</span>;
      case 'en':
        return <span className="greeting-card">Hello {this.props.children}</span>;
      case 'fr':
        return <span className="greeting-card">Bonjouir {this.props.children}</span>;
      case 'pt':
        return <span className="greeting-card">Olá {this.props.children}</span>;
    }
  }
}

export default Greetings;