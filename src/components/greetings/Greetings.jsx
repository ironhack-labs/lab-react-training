import React from 'react';
import './Greetings.css';

export default class Greetings extends React.Component {
  render() {
    return (
      <div lang={this.props.lang} className="Greeting">
        {this.props.children}
      </div>
    );
  }
}
