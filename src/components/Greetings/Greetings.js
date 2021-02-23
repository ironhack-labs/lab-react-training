import React from 'react'
import './Greetings.css'

export default function Greetings(props) {
    let greeting = ''
    switch(props.lang) {
        case 'en': 
        greeting = 'Good morning, '
        break
        case 'de':
        greeting = 'Guten Tag, ' 
        break
        case 'fr':
        greeting = 'Bon jour, ' 
        break
        case 'pt':
        greeting = 'Bom dia, ' 
        break
        default: greeting = 'Good morning'
    }
    
    return (
        <div className='greeting'>
            <h2>{greeting} {props.name}</h2>
        </div>
    )
}
