import React from 'react'

export default function Greetings(props) {
    const greetings = {
        de:'Hallo',
        en:'Hello',
        fr:'Bonjour',
        es:'Hola'
    }
    
    
    return (
        <div>
           {greetings[props.lang]}
           {props.children} 
        </div>
    )
}
