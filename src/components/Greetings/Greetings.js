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
        <div className='greeting' key={props.number}>
            <h1 className="text-5xl font-extrabold">
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>{greeting} {props.name}</span>
            </h1>
        </div>
    )
}
