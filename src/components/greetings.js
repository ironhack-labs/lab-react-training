import React from 'react';
import './greetings.css';

const Greetings = (props) => {
  


    if (props.lang === 'de') {
    return   <div className= "div-laguages">  <h1>Hallo {props.children}</h1> </div>; 

  } else if (props.lang === 'fr') {
    return  <div className= "div-laguages"> <h1>Bonjour {props.children}</h1> </div>;
  } else if (props.lang === 'es') {
    return  <div className= "div-laguages"><h1>Holla {props.children}</h1>  </div>;
  } else if (props.lang === 'en') {
    return  <div className= "div-laguages"> <h1>Hello {props.children}</h1> </div> ;
  }
  
};


export default Greetings