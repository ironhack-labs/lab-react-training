import React from 'react';

class GreetingsClass extends React.Component{
  setGreet(lang){
    const greetingsObj = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour'
    }
    const printGreet = greetingsObj[lang]
    return printGreet
  }
  render(){
    return(
      <article className='container-row'>
      <p>
      <span>{this.setGreet(this.props.lang)} {this.props.children}</span>
      </p>
      </article>
    )

  }
}

export default GreetingsClass