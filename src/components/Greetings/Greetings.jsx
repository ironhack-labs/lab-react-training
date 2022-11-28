import { Children } from 'react'
import './Greetings.css'

const Greetings = props => {


    const { lang } = props

    let hello

    switch (lang) {
        case 'en':
            hello = 'Hello'
            break;
        case 'de':
            hello = 'Hallo'
            break;
        case 'fr':
            hello = 'Bonjour'
            break;
        case 'es':
            hello = 'Hola'
            break;

    }

    return (
        <div className='Greetings'>
            {`${hello} ${props.children}`}
        </div>
    )
}

export default Greetings