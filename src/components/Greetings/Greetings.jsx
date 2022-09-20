import './Greetings.css'

const Greetings = ({ lang, children }) => {
    let greet
    switch (lang) {
        case 'fr':
            greet = 'Bonjeour'
            break;
        case 'es':
            greet = 'Hola'
            break;
        case 'de':
            greet = 'Hallo'
            break;
        default: greet = 'Put correct lang'
    }
    return (
        <>
            <div className='greatings'>
                <p>{greet} {children}</p>
            </div>
        </>
    )

}

export default Greetings