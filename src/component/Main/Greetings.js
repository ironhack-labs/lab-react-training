import React from 'react'


export default function Greetings(props) {
  
  return (
    
    <>
      {
        props.lang === "de" ? <p>Hallo {props.children} </p> 
        :
        props.lang === "en" ? <p>Hello {props.children} </p> 
        :
        props.lang === "es" ? <p>Hola {props.children} </p>
        :
        <p>Bonjour {props.children} </p>
      }
    </>
  )
}
