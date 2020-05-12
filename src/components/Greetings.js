import React from 'react'
import './Greetings.css'

const Greetings = (props) => {
    return (
        <div className='Greetings'>
        <h2>{props.lang === 'de' ? 'Hallo'  : 'Holi' } {props.children}</h2>
        </div>
    )
}


export default Greetings