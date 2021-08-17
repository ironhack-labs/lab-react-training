import React from 'react';

class Greetings extends React.Component {
  render() {
    let lang = this.props.lang;

    switch (lang) {
      case 'de':
        return <div className="greetings">
          <p>Hallo {this.props.children}</p>
        </div>;
        break;
      case 'en':
        return <div className="greetings">
          <p>Hello {this.props.children}</p>
        </div>;
        break;
      case 'es':
        return <div className="greetings">
          <p>Hola {this.props.children}</p>
        </div>;
        break;
      case 'fr':
        return <div className="greetings">
          <p>Bonjour {this.props.children}</p>
        </div>;
        break;
    }
  }
}
export default Greetings