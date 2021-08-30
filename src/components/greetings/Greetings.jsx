import React from 'react';
import './Greetings.css';

class Greetings extends React.Component {
  render() {
    if ('de' === this.props.lang) {
      return (
        <div className="greeting">
          <p>Hallo {this.props.children}</p>
        </div>
      );
    }
    if ('fr' === this.props.lang) {
      return (
        <div className="greeting">
          <p>Bonjour {this.props.children}</p>
        </div>
      );
    }
    return '';
  }
}

export default Greetings;
