const Greetings = ({ lang, children }) => {

    /*     if (lang === 'de') {
            return <p> Hello {children} </p>
        } else if (lang === 'es') {
            return <p> Hola {children}</p>
        } else if (lang === 'de') {
            return <p>Hallo  {children}</p>
        } else if (lang === 'fr') {
            return <p>Bonjour {children}</p>
        } */

    return (
        <div>
            <p>{lang === 'de' ? `Hallo ${children}` : undefined}</p>
            <p>{lang === 'es' ? `Hola ${children}` : undefined}</p>
            <p>{lang === 'en' ? `Hello ${children}` : undefined}</p>
            <p>{lang === 'fr' ? `Bounjour ${children}` : undefined}</p>
        </div>
    )
}

export default Greetings