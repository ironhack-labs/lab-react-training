import React, { Component } from 'react';

export default class Greetings extends Component {
  language(props) {
    if (props === 'de') {
      return 'Hallo';
    } else if (props === 'fr') {
      return 'Bonjour';
    }
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <article className="message is-info">
            <div className="message-body">
              {this.language(this.props.lang)} {this.props.children}
            </div>
          </article>
        </div>
      </div>
    );
  }
}
