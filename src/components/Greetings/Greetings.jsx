import './Greetings.css'

const Greetings = ({ lang, children }) => {
    if (lang === 'de') {
        return (
            <article className='greetings'>
                <p>Hallo {children}</p>
            </article>
        )
    } else if (lang === 'fr') {
        return (
            <article className='greetings'>
                <p>Bonjour {children}</p>
            </article>
        )
    } else if (lang === 'en') {
        return (
            <article className='greetings'>
                <p>Hello {children}</p>
            </article>
        )
    } else {
        return (
            <article className='greetings'>
                <p>Hola {children}</p>
            </article>
        )
    };
}

export default Greetings