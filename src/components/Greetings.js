import React from 'react'

export default function Greetings(props) {
    console.log(props)
    let greeting = ''
    if(props.lang === 'de'){
        greeting = 'Hallo';
    } else if (props.lang === 'fr'){
        greeting = 'Bonjour';
    }
  return (
    <div>
        <p>{greeting}</p>
        <p>{props.children}</p>
    </div>
  )
}
