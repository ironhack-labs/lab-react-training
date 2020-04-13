import React, {Component} from 'react';
import './index.css';

class Greetings extends Component {

  translations = {
    'es': 'Hola',
    'en': 'Hello',
    'de': 'Hallo',
    'fr': 'Bonjoun'
  };

  render() {
    return (
      <div className={'greeting'}>
        {this.translations[this.props.lang]} {this.props.children}
      </div>
    );
  }
}

export default Greetings;