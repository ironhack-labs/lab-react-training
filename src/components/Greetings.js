import React from 'react';

const Greetings = (props) => {
    let greet = '';
    let language = props.lang;
   
    const checkLang = (language) => {
      switch (language) {
        case 'en':
          greet= 'Hello';
          break;
        case 'es':
          greet= 'Holla';
          break;
        case 'fr':
          greet= 'Bonjour';
          break;
        case 'pt':
          greet = 'Olá';
          break;
        case 'de':
          greet = 'Hallo';
          break;
        default:
          return 'Unknow language. Please retrive an try again';
      }
    };
    checkLang (language);
    return (
      <div className="box">
        <p>{greet} {props.name}</p>
      </div>
    );
  };
  
export default Greetings;