import './Greetings.css'

const Greetings = ({ lang, children }) => {
    
    let language;
    
    if (lang == 'de') {
        language = 'Hallo'
    } else {
        language = 'Bonjour'
    }
    
    return (
        <div className='card-greeting'>
            <p>{language} {children}</p>
        </div>
    )

}

export default Greetings