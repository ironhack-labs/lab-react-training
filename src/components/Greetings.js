import React, { Component } from 'react';
//import IdCard from './IdCard';

class Greetings extends Component {
  render() {
    const { lang, children } = this.props;
    let text = lang === 'de' ? 'Hallo' : 'Bonjour';
    return (
      <div className="box">
        {text} {children}
      </div>
    );
  }
}

export default Greetings;
