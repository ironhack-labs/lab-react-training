import React, {Component} from 'react';

class Greetings extends Component {
    render() {
      if('de' === this.props.lang) {
        return <div className="greeting"><h2>Hallo {this.props.firstname}</h2></div>;
      }
      if('fr' === this.props.lang) {
        return <div className="greeting"><h2>Bonjour {this.props.firstname}</h2></div>;
      }
      return "";
    }
}

export default Greetings;