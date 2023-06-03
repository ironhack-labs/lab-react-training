import React from 'react';

function Greetings(props) {
    
    if (props.lang === "de") {
        let greet = "Hallo";
        return ( 
            <h4>{greet } {props.children }</h4>
       )
            }else if (props.lang==="fr"){
        let greet = "Bonjour";
         return ( 
            <h4>{greet } {props.children }</h4>
       )
            }
    
   
    

}
export default Greetings;