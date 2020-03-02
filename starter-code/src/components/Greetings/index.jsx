import React from 'react';

const languages = [
  {de: 'Hallo'},
  {en: 'Hello'},
  {es: 'Hola'},
  {fr: 'Bonjour'}
]

const Greetings = props => {
  const { lang, children } = this.props;
  return (
    
     {languages.map(lang => {
       <div>
       <h3>{lang} {children}</h3>
       </div>
     })}
    
  );
};

export default Greetings;
