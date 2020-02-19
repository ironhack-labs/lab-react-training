import React from 'react'
import {GreetingStyle} from '../styles/styles'


const Greeting = ({lang, children}) => {
    return (
        <GreetingStyle>
        {lang === 'de' ? (<p>Hallo, wie geht's? {children}</p>) : (<p>Bounjourrr graaattaaa {children}</p>)}
        </GreetingStyle>
    )
}

export default Greeting
