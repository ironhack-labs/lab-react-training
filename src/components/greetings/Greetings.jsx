import React from 'react';
import './Greetings.css';

class Greetings extends React.Component {
    
  language() {
    switch (this.props.lang) {
      case 'de':
        return <p>Hallo {this.props.children}</p>;
        break;

      case 'fr':
        return <p>Bonjour {this.props.children}</p>;
        break;
      case 'es':
        return <p>Hola {this.props.children}</p>;
        break;
      case 'en':
        return <p>Hello {this.props.children}</p>;
        break;

      default:
        return <p>Hello {this.props.children}</p>;
     
    }
  }

  render() {
    return (
      <div className="card">
        {this.language()}
      </div>
    );
  }
}
export default Greetings;
