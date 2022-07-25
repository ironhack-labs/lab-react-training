function Greetings({lang, children}){
    return (
        <>
            <h3>{lang === 'de' ? `Hallo ${children}` : undefined}</h3>
            <h3>{lang === 'es' ? `Hola ${children}` : undefined}</h3>
            <h3>{lang === 'en' ? `Hello ${children}` : undefined}</h3>
            <h3>{lang === 'fr' ? `Bounjour ${children}` : undefined}</h3>
        </>
    )
}

export default Greetings;