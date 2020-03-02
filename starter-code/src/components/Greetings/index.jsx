import React, { Component } from 'react';
import './style.scss';

class Greetings extends Component {
  renderSwitch() {
    const { lang } = this.props;
    let word = '';
    switch (lang) {
      case 'de':
        return (word = 'Holla');
        break;
      case 'en':
        return (word = 'Hello');
        break;
      case 'es':
        return (word = 'Holla');
        break;
      case 'fr':
        return (word = 'Bonjour');
        break;
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="greetings">
        <h2>
          {this.renderSwitch()} {children}
        </h2>
      </div>
    );
  }
}

/* const Greetings = props => {
  const { lang, children } = this.props;
  let word;
  return (   
    <div className="greetings">
      { switch (lang) {
       case 'de':
         word = "Holla";
         break;
        case 'en':
          word = "Hello";
          break;
        case 'es':
          word = "Holla";
          break;
        case 'fr':
          word = "Bonjour";
          break;
    }}
      <p>`${word} {children}`</p>
    </div>
    
    
  );
};
 */
export default Greetings;
