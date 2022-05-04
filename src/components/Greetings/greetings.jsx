import './greetings.css'


const Greetings = ({ lang, children }) => {
    let translation = ''
    if (lang === 'de') {
        translation = 'Hallo'
    } else if (lang === 'en') {
        translation = 'Hello'
    } else if (lang === 'es') {
        translation = 'Hola'
    } else if (lang === 'fr') {
        translation = 'Bonjour'
    }

    return (
        <div className='translation'>
            <p>{translation} {children}</p>
        </div>
    )
}


export default Greetings