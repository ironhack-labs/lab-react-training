import './Greetings.css'

const Greetings = (props) => {

    const {lang, children} = props
    
    let greeting
    switch (lang) {
        case 'es':
            greeting = 'Hola'
            break
        case 'de':
            greeting = 'Hallo'
            break
        case 'fr':
            greeting = 'Bonjour'
            break
        case 'en':
            greeting = 'Hello'
            break
    }
    
    return (
        
        <div className='card'>
            <p>{greeting} {children}</p>
        </div>
    )

}

export default Greetings