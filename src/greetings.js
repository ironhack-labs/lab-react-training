import React from "react"


export default function Greetings({lang,children}) {
    let greeting;
  switch (lang) {
    case 'de':
      greeting = `Hallo`
      break;
    case 'en':
      greeting = `Hello`
      break;
    case 'es':
      greeting = `Ke transa`
      break;
    case 'fr':
      greeting = `Bonjour`
      break;
    default:
      break;
  }
  return <div style={{ border: '2px solid black' }}>
    <h2 style={{ margin: 0 }}>{greeting} {children}</h2>
  </div>
}
