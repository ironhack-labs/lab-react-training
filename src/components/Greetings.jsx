const Greetings = ({ lang, children}) => {
    const Hello = {
        de: name => `Hallo ${name}`,
        en: name => `Hello ${name}`,
        es: name => `Hola ${name}`,
        fr: name => `Bonjour ${name}`
    }

    const greeting = Hello[lang] ? Hello[lang](children): `Hello ${children}`

    return <div>{greeting}</div>
    
}

export default Greetings