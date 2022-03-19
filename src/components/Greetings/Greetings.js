function Greetings({ lang, children }) {
    return (
        <div>
             {lang === 'es' && 'Hola '}
             {lang === 'de' && 'Hallo '}
             {lang === 'fr' && 'Bonjour '}
             {lang === 'en' && 'Hello '}
             {children}

        </div>
    )
}


export default Greetings