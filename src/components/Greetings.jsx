import React from 'react'
import './Greetings.css'

export default function Greetings(props) {
    if (props.lang === 'fr') {
        return (
            <div className='message-box'>Bonjour {props.children}</div>
        )
    }
    else if (props.lang ==='de'){
        return (
            <div className='message-box'>Hallo {props.children}</div>
        )
    }
}