import React from 'react'

function Greetings(props) {
    const {lang} = props;

function getLang(placeHolder) {
    if (placeHolder == "de")
    return (
        "Hallo" 
    );
     if ( placeHolder == "en") {
      return (
          "Hello" 
      )
    } if ( placeHolder == "fr") {
       return (
          "Bonjour"
       )
    } else if (placeHolder == "es") {
      return (
       "Holla"
      );
    }
}


   return(
    <div>
 <h1>{getLang(lang)} {props.children}</h1>
    </div>
    
   )
}

export default Greetings


