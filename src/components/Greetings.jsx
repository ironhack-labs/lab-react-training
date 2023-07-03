import React from 'react';

function Greetings(props) {
    
    if (props.lang === "de") {
        let greet = "Hallo";
        return ( 
            <div className="greet">
                <h4>{greet} {props.children}</h4>
            </div>
       )
            }else if (props.lang==="fr"){
        let greet = "Bonjour";
        return ( 
             <div className="greet">
                <h4>{greet} {props.children}</h4>
            </div>
       )
            }
    
   
    

}
export default Greetings;