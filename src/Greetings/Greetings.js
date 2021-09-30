import React from 'react';



const Greetings = (props) => {

let greetWord = "Hello";
    if (props.lang === "de") {
        greetWord = "Hallo"
    }
    if (props.lang === "es") {
        greetWord = "Holla"
    }
    if (props.lang === "fr") {
        greetWord = "Bonjour"
    }

  return (
  <div>
    {greetWord}{props.children}
  </div>);

};

export default Greetings;