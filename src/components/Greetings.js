import React from 'react'

export default function Greetings(props) {
let greeting;
if (props.lang ==='de') {
    greeting = 'Hallo'
    }
if (props.lang ==='fr') {
    greeting = 'Bonjour'
}

return (
<p>{greeting} {props.name}</p>
    )
}
