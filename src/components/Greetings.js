import React from 'react'

//function Greetings(props) {

//    if(props.lang==="de"){
//      return  <p>Hallo {props.children}</p>
//    }   
//    else if(props.lang==="en"){
//      return <p>Hello {props.children}</p>
//    }
//   else if(props.lang==="es"){
//    return <p>Hola {props.children}</p>
//   }
//   else if(props.lang==="fr"){
//    return <p>Bonjour {props.children}</p>
//   }

//}

//export default Greetings

function Greetings ({lang, children}) {

  let greeting;


  if (lang === 'de') {
      greeting = 'Hallo';
    } else if (lang === 'en') {
      greeting = 'Hello';
    } else if (lang === 'es') {
      greeting = 'Hola';
    } else if (lang === 'fr') {
      greeting = 'Bonjour';
    } else {
      greeting = 'Hello';
    }

return (
  <div className="greeting">
    {greeting} {children}!
  </div>
)
}

export default Greetings;