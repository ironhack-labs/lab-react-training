import React from 'react'

function Greetings(props) {
    
    if(props.lang==="de"){
      return  <p>Hallo {props.children}</p>
    }   
    else if(props.lang==="en"){
      return <p>Hello {props.children}</p>
    }
   else if(props.lang==="es"){
    return <p>Hola {props.children}</p>
   }
   else if(props.lang==="fr"){
    return <p>Bonjur {props.children}</p>
   }
 
}

export default Greetings