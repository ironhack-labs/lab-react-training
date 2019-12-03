import React, { Component } from 'react';
import GreetLocale from 'greet-locale';

class Greetings extends Component {
  render() {
    const lang = this.props.lang;
    console.log('this is the lang in the greetings component' + lang);
    return (
      <div className="greetings">
        <p>{GreetLocale(lang)}</p>
      </div>
    );
  }
}

export default Greetings;
