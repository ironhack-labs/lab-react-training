import React from 'react'

function Greetings (props) {
  
  const object = {
    de:"Hallo",
    fr: "Bonjour",
   
}

return (
  <div className = "greetings box">
  {object[props.lang]} 
  {props.children}
  </div>
)
}

export default Greetings;