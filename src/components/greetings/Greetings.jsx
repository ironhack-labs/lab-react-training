import React from 'react';
import "./Greetings.css";

export default class Greetings extends React.Component {
    render() {
            let lang = this.props.lang;

            switch (lang) {
              case 'de':
                return <div className="Greetings">
                  <p>Hallo {this.props.children}</p>
                </div>;
                break;
              case 'en':
                return <div className="Greetings">
                  <p>Hello {this.props.children}</p>
                </div>;
                break;
              case 'es':
                return <div className="Greetings">
                  <p>Hola {this.props.children}</p>
                </div>;
                break;
              case 'fr':
                return <div className="Greetings">
                  <p>Bonjour {this.props.children}</p>
                </div>;
                break;
            }
    }
}