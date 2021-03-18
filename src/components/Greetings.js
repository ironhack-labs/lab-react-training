import Raact from 'react'
import '../assets/css/Greetings.css'

const Greetings = ({lang,children})=>{
    let result = ''
    
    switch(lang){
        case 'es':
            {result= 'Hola'}
            break;
        case 'fr':
            {result= 'Bongour'}
            break;
        case 'de':
            {result= 'Hallo'}
            break;
        default:
            {result= 'Hi'}
    }

    return(
        <div className= 'container__lang'>
        <p>{result}, <strong>{children}</strong>!</p>
        </div>
    )
}

export default Greetings