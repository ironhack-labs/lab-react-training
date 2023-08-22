import React from 'react'

const Greetings = ({lang , children}) => {
    let text;
   if (lang === 'de') {
     text = `Hallo ${children}`
   } else if (lang === 'fr'){
    text = `Bonjour ${children}`
   } else if (lang === 'en') {
    text = `Hello ${children}`
   }else if (lang === 'es') {
    text = `Hola ${children}`
   }else 
   text = `Hello ${children}`
  return (
    <div>{text}</div>
  )
}

export default Greetings



