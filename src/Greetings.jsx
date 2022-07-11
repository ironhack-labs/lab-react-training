import './Greetings.css';

function Greetings({ lang, children }) {
    return (
        <div className='Greetings'>
            {lang === 'de' ? <p>Hallo {children}</p> : undefined}
            {lang === 'fr' ? <p>Bonjour {children}</p> : undefined}
            <>{lang === 'es' ? `Hola ${children}` : undefined}</>
            <>{lang === 'en' ? `Hello ${children}` : undefined}</>
        </div >
    )
}

export default Greetings