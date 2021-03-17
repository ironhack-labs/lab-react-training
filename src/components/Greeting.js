import React from 'react';
import '../assets/css/Greeting.css';

const Greeting = ({lang}) => {
    const greets = () => {
        switch(lang) {
            case 'fr':
                return 'Bonjour François'
                break;
            case 'de':
                return 'Hallo Laura'
                break;
            case 'es':
                return 'Hola Juan'
                break;
            case 'en':
                return 'Hello Peter'
                break;
            default:
                return 'Hola mundo - no message provided'
                break;
        }
    }
    
    return (
        <div className='Greeting'>
            <h2>{greets()}</h2>
        </div>
    )
}

export default Greeting;