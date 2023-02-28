
import React from 'react'

function Greetings({lang, children}) {
let checkLang;
 if (lang === "de") {
    checkLang ="Hallo";
 } else if (lang === "fr") {
    checkLang ="Bonjour";
 }
return (

  <div> {checkLang} {children}
   </div>

   
  
);

}

export default Greetings