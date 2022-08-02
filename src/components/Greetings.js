import React from "react";

function Greeting(props) {
let lang;
 switch (props.lang) {

case 'de':
lang = 'Hallo';
break ;

case 'fr':
lang = 'Bonjour';
break 

case 'en':
lang = 'Hola'
break 
default:
lang = 'Hello';
break;
  
}
};

return (
  <div className="Greeting">
        <p>Hello {props.Greeting} {props.children}!</p>
      
        </div>
    );

  
  export default Greeting;
