import React from 'react'

function Greetings(props) {
    let greeting="";
    if (props.lang==="de") {
        greeting="halo";
    } else if (props.lang==="fr"){
        greeting = "bonjour";
      }
      else if (props.lang==="es"){
        greeting = "hola";
      }
      else if (props.lang==="en"){
        greeting = "hello";
      }
    return (
        <div>
          {greeting} {props.children}
        </div>
    )
}

export default Greetings

