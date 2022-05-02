import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let language
    if (lang === 'en') {
        language = 'Hello'
    }
    if (lang === 'fr') {
        language = 'Salut'
    }
    if (lang === 'sp') {
        language = 'Hola'
    }
    return (
        <article className='greetings' >
            <p>{language} {children}</p>
        </article>
    )
}

export default Greetings