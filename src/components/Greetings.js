import React from 'react';
import "../statics/css/Greetings.css";

const Greetings = ({lang,children}) => {


        let text     
        if (lang === 'fr') {
            text ='Bojour ' + children
            
        } else {
            text ='Hallo ' + children
        }
    
    return (
        <div className="Greetings">
          <p>{text}</p>
        </div>
    )
}


export default Greetings;