import './../Greetings/Greetings.css'

function Greetings({ lang, children }) {


    let hey

    if (lang == 'de') {
        hey = 'Holla'
    }
    else if (lang == 'fr') {
        hey = 'Bonjour'
    }
    else if (lang == 'en') {
        hey = 'Hello'
    }
    else if (lang == 'es') {
        hey = 'Hola'
    }

    return <p className='Greetings'>{hey} {children}</p>

}



export default Greetings