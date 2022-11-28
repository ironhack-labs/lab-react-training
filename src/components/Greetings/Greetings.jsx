import './Greetings.css'
const Greetings = props => {
    const { lang } = props
    
    const language = lg => {
        switch (lg) {
            case 'de':
                return 'Hallo'
            case 'en':
                return 'Hello'
            case 'es':
                return 'Hola'
           case 'fr':
                return 'Bonjour'
        }
    }

    return (
       <div className='Greetings'>
            <span>{language(lang)}</span><span>{props.children}</span>
        </div>
    )
}

export default Greetings