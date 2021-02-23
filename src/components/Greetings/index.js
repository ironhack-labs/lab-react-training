import React from 'react'


const Greetings = ({lang, children}) => {

function greeting(){
  switch(lang){
    case "de": 
    return "Hallo";
      break;
    case "en": 
    return "Hello";
      break;
    case "es": 
      return "Hola"
      break;
    case "fr": 
      return "Bonjour"
      break;
    default: return "Yo!?"
  }
}

  return (
    <div>
    <p>{greeting()} {children}</p> 
    </div>
  )
}

export default Greetings








//return `···· ···· ···· ${digits.splice(-4)}`   can you do this?




// class answer
// const greetingLang = () => {
//   switch(lang) {
//       case 'de':
//           return 'Hallo'
//       case 'en':
//           return 'Hello';
//       case 'es':
//           return 'hola';
//       case 'fr':
//           return 'Bonjour';
//   }
// };

// return (
//   <div>
//       <p>{greetingLang()} {children}</p>
//   </div>
// )