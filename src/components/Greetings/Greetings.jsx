import './Greetings.css'

const Greetings = props => {
    const { lang, children } = props
    let greeting = ''

    switch (lang) {
        case 'de': greeting = 'Hallo'
            break;
        case 'en': greeting = 'Hello'
            break;
        case 'es': greeting = 'Hola'
            break;
        case 'fr': greeting = 'Bonjour'
            break;
    }

    return (
        <div className='sayHi'>
            <p>{greeting}</p>
            <p>{children}</p>
        </div>

    )

}

export default Greetings