import React from 'react';

const Greetings = (props) => {

if (props.lang === "de"){    
return <div>Hallo</div>
} else if (props.lang === "fr") {    
return <div>Bonjour {props.children}</div> 
} else if (props.lang === "en") {    
return <div>Hello</div>
 }
}


 export default Greetings;